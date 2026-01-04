"use client";

import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import CreateInternForm from "../../internships/create/page";
import InternshipTable from "../../../components/internshipData/InternShipTable";
import { createInternAction } from "../../action/internships.action";
import GetInternship from "../../../service/internship.service";

export default function Internship() {
  const [showForm, setShowForm] = useState(false);
  const [internships, setInternships] = useState([]);
  const [loading, setLoading] = useState(true);

  // fetch all internships
  const fetchInternships = async () => {
    setLoading(true);
    try {
      const data = await GetInternship.getALL();
      setInternships(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // handle add  Server Action
  const handleAddInternship = async (data) => {
    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("company", data.company);
      formData.append("location", data.location);
      formData.append("duration", data.duration);
      formData.append("description", data.description);
      formData.append("requirements", data.requirements);

      const res = await createInternAction(formData);
      if (res?.success) {
        await fetchInternships();
        setShowForm(false);
      } else {
        alert("Failed to add internship");
      }
    } catch (err) {
      console.error("Add internship failed:", err);
    }
  };

  return (
    <div className="py-6">
      <div className="text-center mb-4">
        <h1 className="text-3xl text-gray-700 border-b inline-block">
          Internship
        </h1>
      </div>

      <div className="max-w-6xl mx-auto mb-6 flex justify-between items-center">
        <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-md shadow-sm">
          <IoSearchSharp className="text-gray-500 text-lg hover:cursor-pointer" />

          <input
            type="text"
            placeholder="Search internship..."
            className="p-2 bg-transparent outline-none text-sm w-48"
          />
        </div>

        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-500 text-white px-6 py-2 rounded-md"
        >
          Add Internship
        </button>
      </div>

      {/* Add Modal */}
      {showForm && (
        <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-xl w-full max-w-md p-6">
            <CreateInternForm
              onClose={() => setShowForm(false)}
              onSuccess={handleAddInternship}
            />
          </div>
        </div>
      )}

      <InternshipTable
        internships={internships}
        loading={loading}
     
      />
    </div>
  );
}
