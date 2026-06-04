import axios from "axios";
export const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_API
})
export const getAllProducts = async () =>{
    const response =await api.get('/products/categories')
    return response
}
export const getProductsCategory = async (slug) =>{
    const response =await api.get('/products/category/'+slug)
    return response
}
export const getAllCategory = async (slug) =>{
    const response =await api.get('/products/category/'+slug)
    return response
    
}