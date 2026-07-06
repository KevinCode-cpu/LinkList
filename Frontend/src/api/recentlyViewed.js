import API from "./api";

export const addRecentlyViewed =
async (

  providerId,
  token

) => {

  const res =
    await API.post(

      "/recently-viewed/add",

      null,

      {

        params: {
          provider_id:
          providerId
        },

        headers: {
          Authorization:
          `Bearer ${token}`
        }

      }

    );

  return res.data;
};

export const getRecentlyViewed =
async (token) => {

  const res =
    await API.get(

      "/recently-viewed",

      {

        headers: {
          Authorization:
          `Bearer ${token}`
        }

      }

    );

  return res.data;
};