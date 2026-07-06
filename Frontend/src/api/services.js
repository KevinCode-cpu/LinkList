import API from "./api";

export const createService = (data, provider_id) => {
  return API.post(`/services/create?provider_id=${provider_id}`, data);
};

export const getServices = async () => {
  const res = await API.get("/services/");
  return res.data;
};

export const getSingleService = async (id) => {

  const res = await API.get(`/services/${id}`);

  return res.data;
};