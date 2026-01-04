"use client";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function InternshipForm({ onSubmit, onClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form
      onSubmit={handleSubmit((data) => {
        const payload = {
          ...data,
          requirements: data.requirements
            ? data.requirements.split(",").map((r) => r.trim())
            : [],
        };

        onSubmit(payload); 
      })}
      className=" w-full flex flex-col"
    >
      <h2 className="text-2xl font-bold text-center mb-4">Add Internship</h2>

      <input
        {...register("title", { required: "Title is Required" })}
        placeholder="Title"
        className="w-full border p-2 mb-2 rounded"
       
      />
      {errors.title &&(
        <p className="text-red-500 text-sm  ">{errors.title.message}</p>
      )}

      <input
        {...register("company", { required: true })}
        placeholder="Company"
        className="w-full border p-2 rounded mb-2"
      />

      <input
        {...register("location", { required: true })}
        placeholder="Location"
        className="w-full border p-2 rounded mb-2"
      />

      <input
        {...register("duration",{ required: true })}
        placeholder="Duration"
        className="w-full border p-2 rounded mb-2"
      />

      <textarea
        {...register("description",{ required: true })}
        placeholder="Description"
        className="w-full border p-4 rounded mb-2"
      />

      <input
        {...register("requirements",{ required: true })}
        placeholder="Requirements (comma separated)"
        className="w-full border p-2 rounded mb-2"
      />

      <div className="flex justify-between">
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded"
        >
          Submit
        </button>

        <button
          type="button"
          onClick={onClose}
          className="bg-gray-500 text-white px-6 py-2 rounded"
        >
          Close
        </button>
      </div>
    </form>
  );
}
