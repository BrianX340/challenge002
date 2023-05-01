import axios from 'axios';
const { authHeader } = require('./AuthHeader');
const { API_URL } = require('../config')

export const createProduct = async (formData) => {
    try {
        let response = await axios.post(`${API_URL}/admin/products/create`, formData,{
            headers: {
                "content-type": "multipart/form-data",
                ...authHeader()
            }
        })
        return response.data
    }
    catch (e) {
        return { success: false, message: e.message }
    }
}
export const editProduct = async (formData, id) => {
    try {
        let response = await axios.put(`${API_URL}/admin/products/modify/${id}`, formData,{
            headers: {
                "content-type": "multipart/form-data",
                ...authHeader()
            }
        })
        return response.data
    }
    catch (e) {
        return { success: false, message: e.message }
    }
}

export const getProducts = async () => {
    try {
        let response = await axios.get(`${API_URL}/api/products/get`)
        return response.data
    }
    catch (e) {
        return { success: false, message: e.message }
    }
}

export const getProduct = async (id) => {
    try {
        let response = await axios.get(`${API_URL}/api/products/get/${id}`)
        return response.data
    }
    catch (e) {
        return { success: false, message: e.message }
    }
}

export const deleteProduct = async (id) => {
    try {
        let response = await axios.delete(`${API_URL}/admin/products/delete/${id}`,{headers: {...authHeader()}})
        return response.data
    }
    catch (e) {
        return { success: false, message: e.message }
    }
}