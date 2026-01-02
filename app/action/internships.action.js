"use server"
import GetInternship from "../../service/internship.service"
import { revalidatePath } from "next/cache";
export async function InternshipAction(prevState,formData){
    try{
        const payload={
            id:formData.get("id"),
            title:formData.get("title"),
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
    }catch (error){
        console.log("Error ha occured",error)
        return{success:false};
    }
}