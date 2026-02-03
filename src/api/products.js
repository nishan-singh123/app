import formatQuery from "@/helpers/queryFormatter";
import api from ".";
import axios from "axios";
import config from "@/config/config";

export const getProducts = async (searchParams) => {
  const query = formatQuery(await searchParams);

  const response = await axios.get(`${config.apiUrl}/api/products?${query}`);

  return response.data;
};

export const addProduct = async (data) => {
  const response = await api.post(`/api/products`, data);

  return response.data;
};

export const getProductById = async (id) => {
  const response = await axios.get(`${config.apiUrl}/api/products/${id}`);

  return response.data;
};

export const updateProduct = async (id, data) => {
  const response = await api.put(`/api/products/${id}`, data);

  return response.data;
};

export const deleteProduct = async (id) => {
  const response = await api.delete(`/api/products/${id}`);

  return response.data;
};
