"use client";

import InternshipForm from "../../../components/internshipData/InternShipForm";

export default function CreateInternForm({ onClose, onSuccess }) {
  // ONLY pass data upward
  const handleSubmit = (formData) => {
    onSuccess(formData);
  };

  return (
    <InternshipForm
      onSubmit={handleSubmit}
      onClose={onClose}
    />
  );
}
