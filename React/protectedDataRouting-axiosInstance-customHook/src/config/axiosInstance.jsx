import axios from "axios";

export const axiosInstance = axios.create({
    baseURL:"https://fakestoreapi.com"
})

axiosInstance.interceptors.response.use(
    (res)=>{return res},
    (err)=>{console.log(err);
    }
)