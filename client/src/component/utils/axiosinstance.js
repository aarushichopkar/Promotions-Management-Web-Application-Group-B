// src/utils/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:9092/', // Replace with your base URL
});

axiosInstance.interceptors.request.use(
  (config) => {
    const authToken = localStorage.getItem('auth');
    if (authToken) {
      const auth = JSON.parse(authToken);
      config.headers['Authorization'] = `Bearer ${auth.token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
