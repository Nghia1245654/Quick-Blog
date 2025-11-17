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
//lay danh sach user
export const fetchListUser = async (params = {}) => {
  const response = await apiInstance.get('/users', );
  return response;
};
// DELETE: xoa user
export const deleteUser = async (id) => {
  const response = await apiInstance.delete(`/users/${id}`);
  return response;
};