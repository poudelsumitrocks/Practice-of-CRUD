"use server";

import GetUser from "../../service/user.service";
import { revalidatePath } from "next/cache";

// Create user
export async function UserAction(formData) {
  try {
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
    };
    await GetUser.create(payload);
    revalidatePath("/dashboard/UserPage");
    return { success: true };
  } catch (error) {
    return { success: false, message: "Failed to create user" };
  }
}

// Update user
export async function updateUserAction(formData) {
  try {
    const id = formData.get("id");
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
    };
    await GetUser.update(id, payload);
    revalidatePath("/dashboard/UserPage");
    return { success: true };
  } catch (error) {
    return { success: false, message: "Failed to update user" };
  }
}

// Delete user
export async function deleteUserAction(id) {
  await GetUser.delete(id);
  revalidatePath("/dashboard/UserPage");
}
