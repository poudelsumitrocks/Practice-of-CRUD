"use client";

import { useState, useEffect } from "react";
import InternList from "./InternList/page";
import CreateInternForm from "../../internships/create/page";
import GetInternship from "../../../service/internship.service";
import { IoSearchSharp } from "react-icons/io5";
export default function Internship() {
  const [showForm, setShowForm] = useState(false);
  const [internships, setInternships] = useState([]);
  const [loading, setLoading] = useState(true);
  // fetch
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

  useEffect(() => {
    fetchInternships();
  }, []);

  // Api call for the add
  const handleAddInternship = async (payload) => {
    await GetInternship.create(payload);
    await fetchInternships();
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
            placeholder="Search user..."
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

      {/* MODAL */}
      {showForm && (
        <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-xl w-full max-w-md p-6">
            <CreateInternForm
              onClose={() => setShowForm(false)}
              onSuccess={async (data) => {
                await handleAddInternship(data);
                setShowForm(false);
              }}
            />
          </div>
        </div>
      )}

      <InternList
        internships={internships}
        loading={loading}
        refresh={fetchInternships}
      />
    </div>
  );
}
