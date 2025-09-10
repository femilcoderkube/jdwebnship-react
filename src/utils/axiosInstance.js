import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: false,
});

axiosInstance.interceptors.request.use(
  (config) => {
    // Example: attach auth token if available
    const token = localStorage.getItem("auth_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Centralized error handling
    if (error.response) {
      // Optionally handle specific status codes
      if (error.response.status === 401) {
        // e.g., redirect to signin or refresh token
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
