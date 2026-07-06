const API = "http://127.0.0.1:8000";

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