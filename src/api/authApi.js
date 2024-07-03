import axios from 'axios';

const baseURL = 'http://localhost:5001/api/auth'; // change this

const authApi = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Function to log in a user
export const loginUser = async (userData) => {
  try {
    const response = await authApi.post('/login', userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Function to register a new user
export const registerUser = async (userData) => {
  try {
    const response = await authApi.post('/register', userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Function to log out a user
export const logoutUser = async () => {
  try {
    const response = await authApi.get('/logout');
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export default authApi;
