import API from "./api";

export const postJob = (data, customer_id) => {
  return API.post(`/jobs/post?customer_id=${customer_id}`, data);
};

export const getJobs = async () => {
  const res = await API.get("/jobs");
  return res.data;
};