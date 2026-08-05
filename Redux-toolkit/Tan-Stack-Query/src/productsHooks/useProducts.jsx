import { useQuery } from "@tanstack/react-query";
import { productApi } from "../api/productApi";

export const useProducts = ()=>{

    const { data, isPending, error } = useQuery({
    queryKey: ['productsData'],
    queryFn: productApi,
  });

  return {
    data,
    isPending,
    error
  }

}