
import GetUser from '../../service/user.service'
import { revalidatePath } from "next/cache";
export async function UserAction({ formData, payload }) {
    try {
        const payload = {
            id: formData.get("id"),
            name: formData.get("name"),
            email: formData.get("email"),
        };
        await GetUser.create(payload);
        revalidatePath("/dashboard/UserPage");
        return { success: true };
    } catch (error) {
         console.log("Error ha occured",error)
        return{success:false};
    }
}
