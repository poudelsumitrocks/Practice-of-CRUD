

import api from "../lib/axios"

const GetUser = {
    getAll: async () => {
        const res = await api.get("/users")
        return res.data
    },
    getById: async (id) => {
        const res = await api.get(`/users/${id}`);
        return res.data;
    },
    create: async (payload) => {
        const res = await api.post("/users", payload)
        return res.data;
    },
    update: async (id, payload) => {
        const res = await api.put(`/users/${id}`, payload)
        return res.data;
    },
    delete: async (id) => {
        const res = await api.delete(`/users/${id}`);
        return res.data;
    }
}
export default GetUser;