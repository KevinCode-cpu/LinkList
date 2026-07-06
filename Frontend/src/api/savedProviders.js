import API from "./api";

export const saveProvider =
async (

  providerId,
  token

) => {

  const res =
    await API.post(

      "/saved-providers/save",

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

export const getSavedProviders =
async (token) => {

  const res =
    await API.get(

      "/saved-providers",

      {
        headers: {
          Authorization:
          `Bearer ${token}`
        }
      }

    );

  return res.data;
};

export const removeSavedProvider =
async (

  providerId,
  token

) => {

  const res =
    await API.delete(

      `/saved-providers/${providerId}`,

      {
        headers: {
          Authorization:
          `Bearer ${token}`
        }
      }

    );

  return res.data;
};

export const isProviderSaved = async (providerId) => {

    const res = await API.get(

        `/saved-providers/check/${providerId}`

    );

    return res.data;

};