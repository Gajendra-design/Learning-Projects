import { useContext, useEffect, useState } from "react";
import { MyStore } from "../Context/MyStore";
import { axiosInstance } from "../config/axiosInstance";

export const useApi = (endpoint) => {

    const { data, setData } = useContext(MyStore);
    const [isLoading, setIsLoading] = useState(true);

    const getData = async () => {
        const res = await axiosInstance.get(endpoint)
        const data = res.data
        setData(data);
        setIsLoading(false);
    }

    useEffect(() => { getData() }, [])


    return {
        isLoading,
        data
    };
}