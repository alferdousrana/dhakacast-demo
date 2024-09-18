// src/utils/auth.js

// Store token in localStorage
export const setToken = (token) => {
    localStorage.setItem('authToken', token);
  };
  
  // Get token from localStorage
  export const getToken = () => {
    return localStorage.getItem('authToken');
  };
  
  // Remove token from localStorage
  export const clearToken = () => {
    localStorage.removeItem('authToken');
  };
  