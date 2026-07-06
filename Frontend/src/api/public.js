import API from "./api";

export const getProviderDetails = async (providerId) => {

    const res = await API.get(
        `/public/provider/${providerId}`
    );

    return res.data;

};