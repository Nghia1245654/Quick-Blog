// src/services/api/endpoints.js
import apiInstance from './index';
// GET: Tự động thêm header nếu có token

// POST: Tương tự
export const login= async (userData) => {
  const response = await apiInstance.post('/auth/login', userData);
  return response;
};
export const signUpUser = async (userData) => {
  const response = await apiInstance.post('/auth/register', userData);
  return response;
};
export const getme = async (userData) => {
  const response = await apiInstance.get('/auth/me', userData);
  return response;
};