// import axios from "axios";

// const baseConfig = {
//   baseURL: import.meta.env.VITE_API_BASE_URL,
//   headers: {
//     "Content-Type": "application/json",
//   },
//   withCredentials: false,
// };

// // Axios instance for APIs that require authentication
// const authenticatedAxios = axios.create(baseConfig);

// // Axios instance for APIs that work without authentication
// const publicAxios = axios.create(baseConfig);

// // Add token to authenticated requests
// authenticatedAxios.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("auth_token");
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// // Export both instances
// export { authenticatedAxios, publicAxios };

// // Default export for backward compatibility (authenticated)
// export default authenticatedAxios;

import axios from "axios";
import { logout } from "../redux/slices/authSlice";

export const baseURL = import.meta.env.VITE_API_BASE_URL;

const axiosInstance = axios.create({
  baseURL: `${baseURL}`,
  headers: {
    "Content-Type": "application/json",
  },
});

let reduxStore = null;
export const setAxiosStore = (storeInstance) => {
  reduxStore = storeInstance;
};

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.log("401 detected, logging out...");
      if (reduxStore) {
        reduxStore.dispatch(logout());
      }
      localStorage.clear();
      // Optionally, force reload or redirect to login
      // window.location.href = '/';
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
