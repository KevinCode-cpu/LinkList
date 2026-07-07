const API = "https://linklist-s1ut.onrender.com";

export async function getCustomerDashboard() {

    const token = localStorage.getItem("access_token");

    const response = await fetch(

        `${API}/dashboard/customer`,

        {

            headers: {

                Authorization: `Bearer ${token}`

            }

        }

    );

    if (!response.ok) {

        throw new Error("Failed to load dashboard");

    }

    return await response.json();

}