import axios from "axios";

// base url must be in .env file
export const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_API_URL
})
export const getAllProducts = async () => {
    const response = await api.get('/products')
    return response
}
export const getAllCategories = async () => {
    const response = await api.get('/products/categories')
    return response
}
export const getProductsByCategory = async (slug) => {
    const response = await api.get('/products/category/' + slug)
    return response
}

// MOCK_API
export const mockApi = axios.create({
    baseURL: import.meta.env.VITE_MOCK_API_URL
})
// Create
export const registeruser = async (data) => {
    const response = await mockApi.post('/users', data)
    return response
}
// Read
export const authuser = async (data) => {
    const response = await mockApi.get('/users?email=' + data.email)
    return response
}
// Update
export const getUserById = async (id) => {
    const response = await mockApi.get('/users/' + id)
    return response
}
// change Profile
export const updateUser = async (data) => {
  const response = await mockApi.put('/users/' + data.id, data);
  return response;
};
// delete
export const deleteUser = async (id) => {
    const response = await mockApi.delete('/users/' + id)
    return response
}

