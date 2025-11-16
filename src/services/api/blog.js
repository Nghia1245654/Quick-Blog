// src/services/api/endpoints.js
import apiInstance from './index';

// GET: lay danh sach blog
export const fetchListBlog = async (params = {}) => {
  const defaultParams = { page: 1, limit: 10 };
  const response = await apiInstance.get('/posts', {
    params: { ...defaultParams, ...params },
  });
  return response;
};

export const fetchDetailBlog = async (id) => {
  const response = await apiInstance.get(`/posts/${id}`);
  return response;
};
export const createNewBlog = async (userdata) => {
  const response = await apiInstance.post('/posts', userdata);
  return response;
};
