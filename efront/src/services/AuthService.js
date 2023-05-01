const axios = require('axios');
const { API_URL } = require('../config')

const login = async (data) => {  
    try{
        const res = await axios.post(`${API_URL}/login`, data)
        if (res.data.status==='success' && res.data.token){
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('user', JSON.stringify(res.data.user));
        }
        return res.data
    }
    catch(e){
        throw new Error(e.message)
    }
}

const register = async (data) => {
    try{
        const res = await axios.post(`${API_URL}/register`, data)
        return res.data
    }catch(e){
        throw new Error(e.message)
    }
}

module.exports = {
    login,
    register
}