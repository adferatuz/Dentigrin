import { handleResponse } from "./handeErrors";

// url dominio de el servidor
const API_BASE_URL = 'http://localhost:3000/'; // URL base de tu API

const headers = {
    'Content-Type': 'application/json'
};

const apiService = {
    get: async (endpoint) => {
        try {
            const response = await fetch(`${API_BASE_URL}${endpoint}`, { 
                method: 'GET',  
                headers, 
                credentials: 'include' 
            });
            return await handleResponse(response);
        } catch (error) {
            console.error('GET error:', error);
            throw error;
        }
    },
    post: async (endpoint, data) => {
        try {
            const response = await fetch(`${API_BASE_URL}${endpoint}`, {
                method: 'POST',
                headers,
                credentials : 'include',
                body: JSON.stringify(data)
            });
            return await handleResponse(response);
        } catch (error) {
            console.error('POST error:', error);
            throw error;
        }
    },
    // Otros métodos: PUT, DELETE, etc.
    put: async (endpoint, data) => {
        try {
            const response = await fetch(`${API_BASE_URL}${endpoint}`, {
                method: 'PUT',
                headers,
                credentials : 'include',
                body: JSON.stringify(data)
            });
            return await handleResponse(response);
        } catch (error) {
            console.error('PUT error:', error);
            throw error;
        }
    },
    delete: async (endpoint) => {
        try {
            const response = await fetch(`${API_BASE_URL}${endpoint}`, {
                method: 'DELETE',
                headers,
                credentials : 'include',
            });
            return await handleResponse(response);
        } catch (error) {
            console.error('DELETE error:', error);
            throw error;
        }
    },
    getEvents: async (endpoint) => {
        try {
            const response = await fetch(`${API_BASE_URL}${endpoint}`, {
                method: 'GET',
                headers,
                credentials: 'include'
            });
            return await handleResponse(response);
        } catch (error) {
            console.error('GET events error:', error);
            throw error;
        }
    }
};

export default apiService;
