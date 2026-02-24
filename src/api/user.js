import api from ".";

export const updateUser = async (id, data) => {
  const response = await api.put(`/api/users/${id}`, data);

  return response.data;
};

export const getMe = async () => {
  const response = await api.get(`/api/users/me`);

  return response.data;
};

export const updateProfileImage = async (data) => {
  const response = await api.patch(`/api/users/profile-image`, data);

  return response.data;
};