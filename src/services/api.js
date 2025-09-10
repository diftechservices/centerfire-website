import axios from 'axios';

// API base configuration
const API_BASE_URL = import.meta.env.VITE_WP_API_URL || 'https://centerfiredigital.com/wp-json/wp/v2';
const JWT_AUTH_URL = import.meta.env.VITE_JWT_AUTH_URL || 'https://centerfiredigital.com/wp-json/jwt-auth/v1';

// Create axios instance with default config
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// JWT token management
let authToken = localStorage.getItem('wp_auth_token');

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    if (authToken) {
      config.headers.Authorization = `Bearer ${authToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expired or invalid
      localStorage.removeItem('wp_auth_token');
      authToken = null;
    }
    return Promise.reject(error);
  }
);

// Authentication methods
export const auth = {
  login: async (username, password) => {
    try {
      const response = await axios.post(`${JWT_AUTH_URL}/token`, {
        username,
        password,
      });
      
      authToken = response.data.token;
      localStorage.setItem('wp_auth_token', authToken);
      
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  
  logout: () => {
    authToken = null;
    localStorage.removeItem('wp_auth_token');
  },
  
  validateToken: async () => {
    if (!authToken) return false;
    
    try {
      await axios.post(`${JWT_AUTH_URL}/token/validate`, {}, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      return true;
    } catch {
      return false;
    }
  }
};

// Content API methods
export const contentAPI = {
  // Get all pages
  getPages: async (params = {}) => {
    const response = await api.get('/pages', { params });
    return response.data;
  },
  
  // Get page by ID
  getPage: async (id) => {
    const response = await api.get(`/pages/${id}`);
    return response.data;
  },
  
  // Get page by slug
  getPageBySlug: async (slug) => {
    const response = await api.get('/pages', {
      params: { slug }
    });
    return response.data[0];
  },
  
  // Get all posts
  getPosts: async (params = {}) => {
    const response = await api.get('/posts', { params });
    return response.data;
  },
  
  // Get post by ID
  getPost: async (id) => {
    const response = await api.get(`/posts/${id}`);
    return response.data;
  },
  
  // Get post by slug
  getPostBySlug: async (slug) => {
    const response = await api.get('/posts', {
      params: { slug }
    });
    return response.data[0];
  },
  
  // Get media
  getMedia: async (id) => {
    const response = await api.get(`/media/${id}`);
    return response.data;
  },
  
  // Search content
  search: async (query, type = 'post,page') => {
    const response = await api.get('/search', {
      params: { search: query, type }
    });
    return response.data;
  }
};

// Menu API (if using WP menus)
export const menuAPI = {
  getMenus: async () => {
    try {
      const response = await api.get('/menus');
      return response.data;
    } catch (error) {
      // Fallback if menus endpoint not available
      return [];
    }
  }
};

export default api;