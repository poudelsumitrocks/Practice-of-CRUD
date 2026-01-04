"use server";

import GetInternship from "../../service/internship.service";
import { revalidatePath } from "next/cache";

// Create internship
export async function createInternAction(formData) {
  try {
    const payload = {
      title: formData.get("title"),
      company: formData.get("company"),
      location: formData.get("location"),
      duration: formData.get("duration"),
      description: formData.get("description"),
      requirements: formData.get("requirements")
        ? formData.get("requirements").split(",").map(req => req.trim())
        : [],
    };

    await GetInternship.create(payload);
    revalidatePath("/dashboard/internships");
    return { success: true };
  } catch (error) {
    console.log("Error occurred:", error);
    return { success: false, message: "Failed to create internship" };
  }
}

// Update internship
export async function updateInternAction(formData) {
  try {
    const id = formData.get("id");

    const payload = {
      title: formData.get("title"),
      company: formData.get("company"),
      location: formData.get("location"),
      duration: formData.get("duration"),
      description: formData.get("description"),
      requirements: formData.get("requirements")
        ? formData.get("requirements").split(",").map(req => req.trim())
        : [],
    };

    await GetInternship.update(id, payload);
    revalidatePath("/dashboard/internships");
    return { success: true };
  } catch (error) {
    console.log("Error occurred:", error);
    return { success: false, message: "Failed to update internship" };
  }
}

// Delete internship
export async function deleteInternAction(id) {
  try {
    await GetInternship.delete(id);
    revalidatePath("/dashboard/internships");
  } catch (error) {
    console.log("Error occurred:", error);
  }
}
