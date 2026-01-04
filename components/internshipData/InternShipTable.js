"use client";

import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import GetInternship from "../../service/internship.service";
import { useState, useEffect } from "react";
import { refresh } from "next/cache";
import { updateInternAction, deleteInternAction } from "../../app/action/internships.action";

export default function InternList() {
  const [showForm, setShowForm] = useState(false);
  const [internships, setInternships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedIntern, setSelectedIntern] = useState(null);

  // fetch data
  const fetchInternships = async () => {
    setLoading(true);
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

  // Delete internship 
  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this internship?")) return;

    try {
      await deleteInternAction(id);
     
      fetchInternships();
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  // Update internship 
  const handleUpdate = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("id", selectedIntern.id);
    formData.append("title", e.target.title.value);
    formData.append("company", e.target.company.value);
    formData.append("location", e.target.location.value);
    formData.append("duration", e.target.duration.value);
    formData.append("description", e.target.description.value);
    formData.append("requirements", e.target.requirements.value);

    try {
      const res = await updateInternAction(formData);
      if (res?.success) {
        
        fetchInternships();
        setShowForm(false);
        setSelectedIntern(null);
      } else {
        alert("Update failed");
      }
    } catch (err) {
      console.error("Update failed:", err);
    }
  };

  return (
    <div>
      {/* form for Update */}
      {showForm && selectedIntern && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="w-full max-w-xl bg-white p-5 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Update Internship</h2>

            <form onSubmit={handleUpdate} className="space-y-3">
              <input
                name="title"
                defaultValue={selectedIntern.title}
                className="w-full border p-2 rounded"
                placeholder="Title"
                required
              />

              <input
                name="company"
                defaultValue={selectedIntern.company}
                className="w-full border p-2 rounded"
                placeholder="Company"
                required
              />

              <input
                name="location"
                defaultValue={selectedIntern.location}
                className="w-full border p-2 rounded"
                placeholder="Location"
                required
              />

              <input
                name="duration"
                defaultValue={selectedIntern.duration}
                className="w-full border p-2 rounded"
                placeholder="Duration"
                required
              />

              <textarea
                name="description"
                defaultValue={selectedIntern.description}
                className="w-full border p-2 rounded"
                placeholder="Description"
              />

              <textarea
                name="requirements"
                defaultValue={selectedIntern.requirements}
                className="w-full border p-2 rounded"
                placeholder="Requirements"
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
                    setSelectedIntern(null);
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

      {/* Table for the InternList */}
      <div className="max-w-6xl mt-4 mx-auto space-y-4">
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

          <tbody>
            {loading ? (
              <tr>
                <td colSpan="8" className="text-center p-6">
                  Loading internships...
                </td>
              </tr>
            ) : internships.length === 0 ? (
              <tr>
                <td colSpan="8" className="text-center p-6 text-gray-500">
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
                  <td className="p-1">
                    <p className="truncate p-3 max-w-50">{intern.description}</p>
                  </td>
                  <td className="p-1">
                    <p className="flex flex-col max-w-30">{intern.requirements}</p>
                  </td>

                  <td className="py-3 flex justify-center gap-3">
                    <button
                      className="text-blue-500 hover:text-blue-700 hover:cursor-pointer"
                      onClick={() => {
                        setSelectedIntern(intern);
                        setShowForm(true);
                      }}
                    >
                      <CiEdit size={20} />
                    </button>

                    <button
                      className="text-red-500 hover:text-red-600 hover:cursor-pointer"
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
