import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';
export const IMAGE_BASE_URL = 'http://localhost:5000/';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const productApi = {
  getProducts: (siteId) => api.get(`/product?siteId=${siteId}`),
};

export const categoryApi = {
  getCategories: (siteId) => api.get(`/category?siteId=${siteId}`),
};

export const blogApi = {
  getBlogs: (siteId) => api.get(`/blogs?siteId=${siteId}`),
};

export const careerApi = {
  getJobs: (siteId) => api.get(`/careers?siteId=${siteId}`),
};

export const mediaApi = {
  getMedia: (siteId) => api.get(`/media-events?siteId=${siteId}`),
};

export default api;
