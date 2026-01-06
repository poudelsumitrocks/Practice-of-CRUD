"use client";

import  { useEffect, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { IoIosAdd } from "react-icons/io";
import UserForm from "./UserForm";
import UserTable from "./UserDataTable";
import GetUser from "../../service/user.service";
// import ActionForm from "../../../components/usersData/ActionFrom"
// import Loading from "./Loading";
export default function UserClient() {
  const [showForm, setShowForm] = useState(false);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const data = await GetUser.getAll();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="text-center mb-6">
      <h1 className="text-3xl font-semibold text-gray-700 border-b-2 border-gray-300 inline-block pb-1">
        User
      </h1>

      <div className="mt-6 flex justify-between items-center">
        {/* Search */}
        <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-md shadow-sm">
          <IoSearchSharp className="text-gray-500 text-lg" />
          <input
            type="text"
            placeholder="Search user..."
            className="p-2 bg-transparent outline-none text-sm w-48"
          />
          <button className="bg-blue-100 px-4 py-2 rounded-sm text-sm">
            Search
          </button>
        </div>

        {/* Add user button */}
        <button
          className="bg-blue-500 flex items-center gap-2 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          onClick={() => setShowForm(true)}
        >
          <IoIosAdd size={20} />
          Add User
        </button>
      </div>

      {/* Modal */}
      {showForm && (
        <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/60">
          <div className="bg-white rounded-xl w-full max-w-md p-6">
            <UserForm
              onSuccess={() => {
                setShowForm(false);
                fetchUsers();
              }}
              onClose={() => setShowForm(false)}
            />
          </div>
        </div>
      )}

      {/* Table */}
      <UserTable users={users} loading={loading} onRefresh={fetchUsers} />

       
    </div>
  );
}
