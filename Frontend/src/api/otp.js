import API from './api';

export const sendOtp = async (phone) => {

  const res = await API.post(`/otp/send?phone=${phone}`);

  return res.data;
};


export const verifyOtp = async (phone, otp) => {

  const res = await API.post(
    `/otp/verify?phone=${phone}&otp=${otp}`
  );

  return res.data;
};