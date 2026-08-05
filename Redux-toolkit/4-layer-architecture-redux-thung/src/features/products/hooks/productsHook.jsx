import { useQuery } from "@tanstack/react-query"
import { getProductByCatagoryApi, getProductCatagoryApi, getProductsApi } from "../api/productApi"

export const useGetProducts = () => {
    const { data, isPending, error } = useQuery({
        queryKey: ['allProducts'],
        queryFn: getProductsApi
    })

    return {
        data,
        isPending,
        error
    }
}

export const useGetProductsCatagory = () => {
    const { data, isPending, error } = useQuery({
        queryKey: ['productCatagory'],
        queryFn: getProductCatagoryApi
    })

    return {
        data,
        isPending,
        error
    }
}

export const useGetProductByCatagory = (catagory) => {
    const { data, isPending, error } = useQuery({
        queryKey: ['productByCatagory',catagory],
        queryFn: ()=>getProductByCatagoryApi(catagory)
    })

    return {
        data,
        isPending,
        error
    }
}