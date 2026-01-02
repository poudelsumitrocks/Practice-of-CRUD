import axios from "axios";
import api from "../lib/axios";

const GetInternship={
    getALL:async()=>{
        console.log(process.env.NEXT_PUBLIC_API_URL)
        const res=await api.get("/internships")
        return res.data;
    },
    getById:async()=>{
        const res=await api.get(`/internships/${id}`);
        return res.data;
    },
    create:async(payload)=>{
        const res=await api.post("/internships",payload);
        return res.data;
    },
    update:async(id,payload)=>{
         const res=await api.put(`/internships/${id}`,payload)
        return res.data;
    },
    delete:async(id)=>{
        const res =await api.delete(`/internships/${id}`)
        return res.data;
    }
}
export default GetInternship;