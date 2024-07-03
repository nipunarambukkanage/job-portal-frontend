import axios from 'axios';

const baseURL = 'http://localhost:5001/api/jobs'; 

const jobApi = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Function to fetch all jobs
export const getAllJobs = async () => {
  try {
    const response = await jobApi.get('/');
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Function to fetch a single job by ID
export const getJobById = async (id) => {
  try {
    const response = await jobApi.get(`/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Function to create a new job
export const createJob = async (jobData) => {
  try {
    const response = await jobApi.post('/', jobData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Function to update a job by ID
export const updateJob = async (id, jobData) => {
  try {
    const response = await jobApi.put(`/${id}`, jobData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Function to delete a job by ID
export const deleteJob = async (id) => {
  try {
    const response = await jobApi.delete(`/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export default jobApi;
