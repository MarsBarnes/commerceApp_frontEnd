import axios from "axios";

// Create an Axios instance
const api = axios.create();

// Add a response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 498) {
      localStorage.token = "";
      // Session has expired, redirect to the login page
      window.location.href = "/login";
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);

export default api;
