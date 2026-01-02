"use client";

import { useForm } from "react-hook-form";
export default function InternshipForm({ data = {}, onSubmit, onClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: data.title || "",
      company: data.company || "",
      location: data.location || "",
      duration: data.duration || "",
      description: data.description || "",
      requirements: data.requirements ? data.requirements.join(", ") : "",
    },
  });

  return (
    <div className="w-full ">
      <form
        onSubmit={handleSubmit((formData) => {
          formData.requirements = formData.requirements
            ? formData.requirements.split(",").map((req) => req.trim())
            : [];
          onSubmit(formData);
        })}
        className="space-y-4"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Add Internship
        </h2>

        {/* Title */}
        <div>
          <input
            {...register("title", { required: "Title is Required" })}
            placeholder="Internship Title"
            className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
          )}
        </div>

        {/* Company */}
        <div>
          <input
            {...register("company", { required: "Please fill this field" })}
            placeholder="Company"
            className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.company && (
            <p className="text-red-500 text-sm">{errors.company.message}</p>
          )}
        </div>

        {/* Location */}
        <div>
          <input
            {...register("location", { required: "Location is Required" })}
            placeholder="Location"
            className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.location && (
            <p className="text-red-500 text-sm">{errors.location.message}</p>
          )}
        </div>

        {/* Duration */}
        <div>
          <input
            {...register("duration", { required: "Please fill this field" })}
            placeholder="Duration (e.g., 3 months)"
            className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Description */}
        <div>
          <textarea
            {...register("description", { required: "Description is required" })}
            placeholder="Description"
            rows={4}
            className="w-full border px-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Requirements */}
        <div>
          <input
            {...register("requirements", { required: "Requirements are required" })}
            placeholder="Requirements (comma separated)"
            className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-between items-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md"
          >
            Submit
          </button>

          <button
            type="button"
            className="bg-gray-500 hover:bg-red-600 text-white px-6 py-2 rounded-md"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
}
