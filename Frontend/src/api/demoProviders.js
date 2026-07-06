import API from "./api";

export const getDemoProviders = async (
    category,
    serviceKey = null
) => {

    let url =
        `/demo-providers/${category}`;

    if (serviceKey) {

        url +=
        `?service_key=${serviceKey}`;

    }

    const res =
        await API.get(url);

    return res.data;
};