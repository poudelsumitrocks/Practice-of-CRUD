"use client";
import { useForm } from "react-hook-form";
import submitAction from "../../app/action/actionForm";
import { toast } from "react-toastify";

export default function Page({ onClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // Convert data to FormData for server action
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("add", data.add);

      await submitAction(formData);
      toast.success("Data Submitted")
      reset();
    } catch (err) {
    //   alert("Error: " + err.message);
    toast.error("Error",err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Contact Form</h1>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter your name"
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.name ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
            }`}
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <p className="text-red-500 mt-1 text-sm">{errors.name.message}</p>}
        </div>

        <div className="mb-6">
          <input
            type="email"
            placeholder="Enter your email"
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.add ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
            }`}
            {...register("add", { 
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address"
              }
            })}
          />
          {errors.add && <p className="text-red-500 mt-1 text-sm">{errors.add.message}</p>}
        </div>

        <div className="flex justify-between gap-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>

          <button
            type="button"
            onClick={onClose}
            className="w-full bg-gray-500 text-white font-semibold py-2 rounded-lg hover:bg-gray-600 transition"
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
}
