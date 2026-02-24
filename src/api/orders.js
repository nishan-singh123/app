import api from ".";

export const getAllOrders = async (status) => {
  let url = "/api/orders";

  if (status) url += `?status=${status}`;

  const response = await api.get(url);

  return response.data;
};

export const getOrdersByUser = async (status) => {
  let url = "/api/orders/user";

  if (status) url += `?status=${status}`;

  const response = await api.get(url);

  return response.data;
};

export const createOrder = async (data) => {
  const response = await api.post(`/api/orders`, data);

  return response.data;
};

export const cancelOrder = async (id) => {
  const response = await api.put(`/api/orders/${id}/cancel`);

  return response.data;
};

export const payViaKhalti = async (id) => {
  const response = await api.post(`/api/orders/${id}/payment/khalti`);

  return response.data;
};

export const confirmPayment = async (id, status) => {
  const response = await api.put(`/api/orders/${id}/confirm-payment`, {
    status,
  });

  return response.data;
};

export const updateStatus = async (id, status) => {
  const response = await api.put(`/api/orders/${id}/status`, {
    status,
  });

  return response.data;
};

export const payViaCash = async (id) => {
  const response = await api.post(`/api/orders/${id}/payment/cash`);

  return response.data;
};

export const payViaStripe = async (id) => {
  const response = await api.post(`/api/orders/${id}/payment/stripe`);

  return response.data;
};
