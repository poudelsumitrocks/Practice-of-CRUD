"use client";

import InternshipForm from "../../../components/internshipData/InternShipForm";

export default function CreateInternForm({ onClose }) {
  const handleSubmit = (data) => {
    console.log("Form submitted:", data);
    onClose(); 
  };

  return (
    <div>
      <InternshipForm onSubmit={handleSubmit} onClose={onClose} />
    </div>
  );
}
