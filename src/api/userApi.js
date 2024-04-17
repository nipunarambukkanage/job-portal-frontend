import axios from 'axios';

const baseURL = 'http://localhost:5000/api/users';

const userApi = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Function to fetch all users
export const getAllUsers = async () => {
  try {
    const response = await userApi.get('/');
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Function to fetch a single user by ID
export const getUserById = async (id) => {
  try {
    const response = await userApi.get(`/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Function to update a user by ID
export const updateUser = async (id, userData) => {
  try {
    const response = await userApi.put(`/${id}`, userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Function to delete a user by ID
export const deleteUser = async (id) => {
  try {
    const response = await userApi.delete(`/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export default userApi;
