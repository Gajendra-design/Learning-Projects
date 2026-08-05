import { api } from "../../../config/axiosInstance"

export const getProductsApi = async () => {
    try {
        const response = await api.get('/products')
        return response.data.products;
    } catch (error) {
        console.log('get products api error', error);

    }
}

export const getProductCatagoryApi = async () => {
    try {
        const response = await api.get('/products/categories')
        return response.data
    } catch (error) {
        console.log('get product catagory api', error);

    }

}

export const getProductByCatagoryApi = async (catagory)=>{

    const endPoint = catagory === 'all'?'/products':`/products/category/${catagory}`

    try {
        const response = await api.get(endPoint)
        return response.data.products
        
    } catch (error) {
        console.log('get product by catagory api error',error);
        
    }
}