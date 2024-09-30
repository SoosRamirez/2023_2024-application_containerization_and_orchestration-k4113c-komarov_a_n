import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const loginUser = async (username, password) => {
    const response = await axios.post(`${API_URL}/auth/login`, { username, password });
    return response.data; // Contains the access token
};

export const signupUser = async (username, password) => {
    const response = await axios.post(`${API_URL}/auth/signup`, { username, password });
    return response.data;
};

export const fetchTasks = async (token) => {
    const response = await axios.get(`${API_URL}/tasks`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};
