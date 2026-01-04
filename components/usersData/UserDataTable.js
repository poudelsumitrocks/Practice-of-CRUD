"use client";

import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { updateUserAction, deleteUserAction } from "../../app/action/users.action";
import GetUser from "../../service/user.service"; 

export default function UserTable() {
  const [showForm, setShowForm] = useState(false);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState(null);

  // Fetch all users
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

  // Delete user via Server Action
  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this user?")) return;
    try {
      await deleteUserAction(id);
      toast.success(" Deleted ")
      fetchUsers(); 
    } catch (err) {
      toast.error(" Delete failed")
      console.error("Delete failed:", err);
    }
  };

  // Update user via Server Action
  const handleUpdate = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("id", selectedUser.id);
    formData.append("name", e.target.name.value);
    formData.append("email", e.target.email.value);

    try {
      const res = await updateUserAction(formData);
      if (res?.success) {
        fetchUsers();
        toast.success(" Data is updated")
        setShowForm(false);
        setSelectedUser(null);
      } else {
        alert("Update failed");
      }
    } catch (err) {
      console.error("Update failed:", err);
    }
  };

  return (
    <div>
      {/* Update Form Modal */}
      {showForm && selectedUser && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-center">Update User</h2>
            <form onSubmit={handleUpdate} className="space-y-3">
              <input
                name="name"
                defaultValue={selectedUser.name}
                className="w-full border p-2 rounded"
                placeholder="Full Name"
                required
              />

              <input
                name="email"
                defaultValue={selectedUser.email}
                className="w-full border p-2 rounded"
                placeholder="Email"
                required
              />

              <div className="flex gap-3 justify-end pt-3">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                  Update
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setShowForm(false);
                    setSelectedUser(null);
                  }}
                  className="bg-gray-400 text-white px-4 py-2 rounded"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Users Table */}
      <div className="max-w-6xl mt-4 mx-auto space-y-4">
        <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
          <thead className="bg-gray-100 text-gray-600 text-sm">
            <tr>
              <th className="p-3">
                <input type="checkbox" />
              </th>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="4" className="text-center p-6">
                  Loading users...
                </td>
              </tr>
            ) : users.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center p-6 text-gray-500">
                  No users found
                </td>
              </tr>
            ) : (
              users.map((user) => (
                <tr
                  key={user.id}
                  className="border-t hover:bg-gray-50 transition"
                >
                  <td className="p-3">
                    <input type="checkbox" />
                  </td>
                  <td className="p-2 font-sm">{user.name}</td>
                  <td className="p-2">{user.email}</td>
                  <td className="py-3 flex justify-center gap-3">
                  
                    <button
                      className="text-blue-500 hover:text-blue-700 hover:cursor-pointer"
                      onClick={() => {
                        setSelectedUser(user);
                        setShowForm(true);
                      }}
                    >
                      <CiEdit size={20} />
                    </button>

                    
                    <button
                      className="text-red-500 hover:text-red-600 hover:cursor-pointer"
                      onClick={() => handleDelete(user.id)}
                    >
                      <MdDelete size={20} />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
