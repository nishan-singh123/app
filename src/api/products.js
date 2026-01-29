import config from "@/config/config";
import formatQuery from "@/helpers/queryFormatter";
import axios from "axios";

export const getProducts = async (searchParams) => {
  const query = formatQuery(await searchParams);

  const response = await axios.get(`${config.apiUrl}/api/products?${query}`);

  return response.data;
};

export const addProduct = async (data) => {
  const authToken = localStorage.getItem("authToken");

  const response = await axios.post(`${config.apiUrl}/api/products`, data, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });

  return response.data;
};

export const getProductById = async (id) => {
  const response = await axios.get(`${config.apiUrl}/api/products/${id}`);

  return response.data;
};

export const updateProduct = async (id, data) => {
  const authToken = localStorage.getItem("authToken");

  const response = await axios.put(
    `${config.apiUrl}/api/products/${id}`,
    data,
    {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    },
  );

  return response.data;
};

export const deleteProduct = async (id) => {
  const authToken = localStorage.getItem("authToken");

  const response = await axios.delete(`${config.apiUrl}/api/products/${id}`, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });

  return response.data;
};
