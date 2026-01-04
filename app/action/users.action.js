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
    console.error("Create user failed:", error);
    return { success: false };
  }
}

// Update user
export async function updateUserAction(formData) {
  try {
    const id = formData.get("id");
    if (!id) throw new Error("User ID missing");

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
    };

    await GetUser.update(id, payload);

    revalidatePath("/dashboard/UserPage");

    return { success: true };
  } catch (error) {
    console.error("Update user failed:", error);
    return { success: false };
  }
}
