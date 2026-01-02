import axios from "axios"



const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        "Content-Type": "application/json"
    },
});
// const apiGet=axios.get({
//     baseURL:process.env.NEXT_PUBLIC_API_URL_INTERNSHIP,
//     headers:{
//         "Content-Type":"application.json"
//     },
// });
export default api;
// export default apiGet;