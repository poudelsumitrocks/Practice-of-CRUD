"use client";

import { useForm } from "react-hook-form";
import { UserAction } from "../../app/action/users.action";
import { toast } from "react-toastify";

export default function UserForm({ onClose, onSuccess,  defaultValues = {} }) {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    defaultValues,
  });

  const submitHandler = async (data) => {
   
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    

    const res =  await UserAction(formData);

    if (res?.success) {
      reset();
      toast.success("Submitted..!")
      onSuccess();
    } else {
    //   alert("Something went wrong");
    toast.error("Something wenr wrong");
    }
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)} className="w-full flex flex-col gap-4">
    
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
           Submit
        </button>

        <button type="button" onClick={onClose} className="bg-gray-500 text-white px-6 py-2 rounded">
          Close
        </button>
      </div>
    </form>
  );
}
