import API from "./api";

export const getAvailability =
  async (token) => {

    const res = await API.get(
      "/users/availability",
      {
        headers: {
          Authorization:
            `Bearer ${token}`
        }
      }
    );

    return res.data;
};

export const updateAvailability =
  async (
    available,
    token
  ) => {

    const res = await API.put(
      `/users/availability?is_available=${available}`,
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