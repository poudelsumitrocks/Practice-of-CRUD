"use client"
import React, { useState,useEffect } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { IoIosAdd } from "react-icons/io";
import UserForm from "../../../components/usersData/UserForm";
import UserTable from "../../../components/usersData/UserDataTable";
import GetUser from "../../../service/user.service";

export default function page() {
  const [showform,setShowForm]=useState(false);
  const [user,setUsers]=useState([]);
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

  const handleUserAdd = async (payload) => {
    try {
      await GetUser.create(payload); 
      console.log("Payload : ",payload);
    //   setUsers(prev=>[...prev,JSON.stringify({name:payload.name,email:payload.email})])
    // console.log(JSON.stringify({name:payload.name,email:payload.email}));
      setShowForm(false);       

    } catch (err) {
      console.log("Error Occured",err);
    }
  };
    return (
    <div className="text-center mb-6">
      <h1 className="text-3xl font-semibold text-gray-700 border-b-2 border-gray-300 inline-block pb-1">
        User
      </h1>

      <div className="mt-6 flex justify-between items-center">
        <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-md shadow-sm">
          <IoSearchSharp className="text-gray-500 text-lg hover:cursor-pointer" />

          <input
            type="text"
            placeholder="Search user..."
            className="p-2 bg-transparent outline-none text-sm w-48"
          />

          <button className="bg-blue-100 text-black/60 px-4 py-2 rounded-sm text-sm hover:opacity-90 hover:cursor-pointer transition" onKeyDown={(e) => e.key === "Enter" }>
            Search
          </button>
        </div>
        <button className="bg-blue-500 flex justify-center items-center text-white gap-2 px-4 py-2 rounded-lg hover:cursor-pointer hover:bg-blue-700" onClick={()=>setShowForm(true)}>
         <IoIosAdd size={20} /> Add User
        </button>

        {showform && 
        (
          <div className="fixed inset-0  z-30 flex items-center justify-center bg-black/60 ">
            <div className="bg-white rounded-xl w-full max-w-md p-6">
              <UserForm 
             onSubmit={handleUserAdd} onClose={() => setShowForm(false)}/>   
            </div>
          </div>
        )
        }  
      </div>
      <UserTable />
    </div>
  );
}
