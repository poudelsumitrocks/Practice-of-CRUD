"use client";

import { useForm } from "react-hook-form";
import { UserAction, updateUserAction } from "../../app/action/users.action";

export default function UserForm({ onClose, onSuccess, mode = "create", defaultValues = {} }) {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    defaultValues,
  });

  const submitHandler = async (data) => {
   
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    if (mode === "update") formData.append("id", data.id);

    const res = mode === "update"
      ? await updateUserAction(formData)
      : await UserAction(formData);

    if (res?.success) {
      reset();
      onSuccess();
    } else {
      alert("Something went wrong");
    }
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)} className="w-full flex flex-col gap-4">
      <h2 className="text-2xl font-bold text-center">
        {mode === "update" ? "Update User" : "Add User"}
      </h2>

      {mode === "update" && <input type="hidden" {...register("id")} />}

      <input
        type="text"
        {...register("name", { required: "Name is required" })}
        placeholder="Enter Name"
        className="border p-2 rounded"
      />
      {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

      <input
        type="email"
        {...register("email", { required: "Email is required" })}
        placeholder="Enter Email"
        className="border p-2 rounded"
      />
      {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

      <div className="flex justify-between pt-2">
        <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded">
          {mode === "update" ? "Update" : "Submit"}
        </button>

        <button type="button" onClick={onClose} className="bg-gray-500 text-white px-6 py-2 rounded">
          Close
        </button>
      </div>
    </form>
  );
}
