// src/services/api/endpoints.js
import apiInstance from './index';
// GET: Tự động thêm header nếu có token

// POST: Tương tự
export const loginUser = async (userData) => {
  const response = await apiInstance.post('/auth/login', userData);
  return response;
};
export const registrationUser = async (userData) => {
  const response = await apiInstance.post('/auth/register', userData);
  return response;
};