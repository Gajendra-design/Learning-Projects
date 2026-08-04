import { axiosIntance } from "../config/axiosInstace"

export const productApi = async ()=>{
    try {
        const response = await axiosIntance.get('/products')
        return response.data.products;
        
    } catch (error) {
        console.log('error in product api',error)
    }
}