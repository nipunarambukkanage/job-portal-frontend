import axios from 'axios';

const baseURL = 'http://localhost:5001/api/categories'; // Replace 'your-backend-url' with your actual backend URL

const categoryApi = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Function to fetch all categories
export const getAllCategories = async () => {
  try {
    const response = await categoryApi.get('/');
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Function to fetch a single category by ID
export const getCategoryById = async (id) => {
  try {
    const response = await categoryApi.get(`/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Function to create a new category
export const createCategory = async (categoryData) => {
  try {
    const response = await categoryApi.post('/', categoryData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Function to update a category by ID
export const updateCategory = async (id, categoryData) => {
  try {
    const response = await categoryApi.put(`/${id}`, categoryData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Function to delete a category by ID
export const deleteCategory = async (id) => {
  try {
    const response = await categoryApi.delete(`/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export default categoryApi;
