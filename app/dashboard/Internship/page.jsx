"use client";

import { useState, useEffect } from "react";
import CreateInternForm from "../../internships/create/page";
import GetInternship from "../../../service/internship.service";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
export default function Internship() {
  const [showForm, setShowForm] = useState(false);
  const [internships, setInternships] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchInternships = async () => {
    setLoading(true);
    // console.log(process.env.NEXT_PUBLIC_API_URL);
    try {
      const data = await GetInternship.getALL();
      setInternships(data);
    } catch (error) {
      console.error("Error fetching internships:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInternships();
  }, []);

  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this internship?")) {
      await GetInternship.delete(id);
      fetchInternships();
    }
  };

  return (
    <div className="py-6">
      <div className="text-center mb-4">
        <h1 className="font-[Poppins] text-3xl text-gray-700 border-b border-gray-600 inline-block">
          Internship
        </h1>
      </div>

      {/* Top Bar */}
      <div className="max-w-6xl mx-auto mb-6">
        <div className="flex items-center justify-between">
          <input
            type="text"
            placeholder="Search..."
            className="h-10 w-72 px-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            onClick={() => setShowForm(true)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md shadow-sm"
          >
            Add Internship
          </button>
        </div>
        <hr className="border border-gray-400 mt-4" />
      </div>

      {/* Modal Form */}
      {showForm && (
        <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white shadow-lg rounded-xl w-full max-w-md px-6 py-2">
            <CreateInternForm
              onClose={() => setShowForm(false)}
              onSuccess={() => {
                fetchInternships();
                setShowForm(false);
              }}
            />
          </div>
        </div>
      )}

      {/* Internship List */}
      <div className=" max-w-6xl mt-4 mx-auto space-y-4">
        <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
          <thead className="bg-gray-100 text-gray-600 text-sm">
            <tr>
              <th className="p-3 text-left">
                <input type="checkbox" />
              </th>
              <th className="p-3 text-left">Title</th>
              <th className="p-3 text-left">Company</th>
              <th className="p-3 text-left">Location</th>
              <th className="p-3 text-left">Duration</th>
              <th className="p-3 text-center">Description</th>
              <th className="p-3 text-center">Requirement</th>
              <th className="p-3 text-center">Action</th>
            </tr>
          </thead>

          {/* internship list */}

          <tbody>
            {loading ? (
              <tr>
                <td colSpan="6" className="text-center p-6">
                  Loading internships...
                </td>
              </tr>
            ) : internships.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center p-6 text-gray-500">
                  No internships found
                </td>
              </tr>
            ) : (
              internships.map((intern) => (
                <tr
                  key={intern.id}
                  className="border-t hover:bg-gray-50 transition"
                >
                  <td className="p-3">
                    <input type="checkbox" />
                  </td>
                  <td className="p-1 font-medium">{intern.title}</td>
                  <td className="p-1">{intern.company}</td>
                  <td className="p-1">{intern.location}</td>
                  <td className="p-1">{intern.duration}</td>
                  <td className="p-1 ">
                    <p className="truecate">{intern.description}</p>
                    
                    </td>
                  <td className="p-1 ">{intern.requirements}</td>

                  <td className="py-3 flex justify-center gap-3">
                    <button
                      className="text-blue-500 hover:text-blue-700"
                      onClick={() => setShowForm(true)}
                    >
                      <CiEdit size={20} />
                    </button>

                    <button
                      className="text-red-500 hover:text-red-600"
                      onClick={() => handleDelete(intern.id)}
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
