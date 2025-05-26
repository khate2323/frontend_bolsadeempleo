import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:3000/api/";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor que revisa si requireAuth está desactivado
api.interceptors.request.use(
  (config) => {
    // Si config._requireAuth es false, no añadir headers de auth
    if (config._requireAuth === false) {
      return config;
    }

    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// Métodos genéricos con soporte para requireAuth
export const apiService = {
  get: (url, params = {}, requireAuth = true) =>
    api.get(url, {
      params,
      _requireAuth: requireAuth,
    }),

  post: (url, data = {}, requireAuth = true) =>
    api.post(url, data, {
      _requireAuth: requireAuth,
    }),

  put: (url, data = {}, requireAuth = true) =>
    api.put(url, data, {
      _requireAuth: requireAuth,
    }),

  delete: (url, requireAuth = true) =>
    api.delete(url, {
      _requireAuth: requireAuth,
    }),
};
