import API from "./api";

export const getProvidersByCategory = async (category) => {

  const res = await API.get(
    `/providers/category/${category}`
  );

  return res.data;
};

export const getProvider = async (id) => {

  const res = await API.get(
    `/providers/${id}`
  );

  return res.data;
};