import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const productApi = {
  getProducts: (siteId) => api.get(`/product?siteId=${siteId}`),
};

export const categoryApi = {
  getCategories: (siteId) => api.get(`/category?siteId=${siteId}`),
};

export default api;
