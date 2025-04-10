// Configura las peticiones basicas como interceptores, headers y url base
import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL||"http://localhost:3000"; 

const axiosInstance = axios.create({
  baseURL: apiUrl, // Dirección del backend
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
