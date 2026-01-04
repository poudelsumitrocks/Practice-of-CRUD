"use client"
import { useForm } from "react-hook-form";
export default function userForm({ onSubmit, onClose }) {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    return (
        <div >
            <form onSubmit={handleSubmit((data) => {

                onSubmit(data);
            })}
                className="w-full flex flex-col"
            >
                <h2 className="text-2xl font-bold text-center">Add User</h2>

                <input type="text"
                    {...register("name", { required: "Full name is required" })
                    }
                    placeholder="Enter the FullName"
                    className="w-full border p-2 rounded mb-4" />
                {errors.Name && (
                    <p className="text-red-500 text-sm">{errors.Name.message}</p>
                )}

                <input
                    type="email"
                    {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Invalid email address",
                        },
                    })}
                    placeholder="Enter the Email"
                    className="w-full border p-2 rounded mb-4"
                />
                {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
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

        </div>
    )
}
