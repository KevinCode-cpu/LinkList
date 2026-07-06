import API from "./api";

export const getReviews = async (serviceId) => {

  const res = await API.get(
    `/reviews/${serviceId}`
  );

  return res.data;
};