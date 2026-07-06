import API from "./api";

export const createCallbackRequest = async (
  providerId,
  requestedTime,
  token
) => {

  const res = await API.post(

    "/callbacks/create",

    null,

    {
      params: {
        provider_id: providerId,
        requested_time: requestedTime
      },

      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );

  return res.data;
};

export const getProviderRequests = async (
  token
) => {

  const res = await API.get(
    "/callbacks/provider",
    {
      headers: {
        Authorization:
          `Bearer ${token}`
      }
    }
  );

  return res.data;
};

export const acceptRequest = async (
  requestId,
  token
) => {

  const res = await API.put(

    `/callbacks/accept/${requestId}`,

    {},

    {
      headers: {
        Authorization:
          `Bearer ${token}`
      }
    }
  );

  return res.data;
};

export const rejectRequest = async (
  requestId,
  token
) => {

  const res = await API.put(

    `/callbacks/reject/${requestId}`,

    {},

    {
      headers: {
        Authorization:
          `Bearer ${token}`
      }
    }
  );

  return res.data;
};

export const getMyRequests = async (
  token
) => {

  const res = await API.get(

    "/callbacks/my-requests",

    {
      headers: {
        Authorization:
          `Bearer ${token}`
      }
    }

  );

  return res.data;
};