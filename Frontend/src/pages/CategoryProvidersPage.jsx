import React, { useEffect, useState } from "react";
import {
  useParams,
  useLocation,
  useNavigate
} from "react-router-dom";
import LoginRequiredModal
from "../components/LoginRequiredModal";
import {
  getDemoProviders
} from "../api/demoProviders";

const CategoryProvidersPage = () => {

  const [showLoginModal,setShowLoginModal]=useState(false);
  const { category } = useParams();

  const navigate = useNavigate();
 const location = useLocation();
  const serviceKey =
    location.state?.serviceKey;

  const [providers, setProviders] =
    useState([]);



  useEffect(() => {

    const loadProviders = async () => {
      console.log("Category:", category);
      console.log("Service Key:", serviceKey);
    console.log("Location State:", location.state);
      try {

        const demo =
          await getDemoProviders(
            category,
            serviceKey
          );

        console.log(demo);

        setProviders(demo);

      }

      catch (err) {

        console.error(err);

      }

    };

    loadProviders();

  }, [category, serviceKey]);

  return (

    <div className="max-w-7xl mx-auto p-6">

      <h1 className="text-4xl font-bold mb-8 capitalize">
        {category} Providers
      </h1>

      {providers.length === 0 ? (
        <div className="text-center text-gray-500 text-lg">
          No providers available yet.
        </div>
      ) : (

        <div
          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-6
          "
        >

         {providers.map((provider) => (

<div
    key={provider.id}

              onClick={() => {

                const token = localStorage.getItem("access_token");

                if (!token) {

                  setShowLoginModal(true);

                  navigate("/login");

                  return;

                }

                navigate(

                  `/provider/${provider.id}`,

                  {

                    state: {

                      demoProvider: provider

                    }

                  }

                );

              }}

              className="
bg-white
rounded-2xl
shadow-md
hover:shadow-xl
transition-all
duration-300
p-5
hover:-translate-y-1
cursor-pointer
"
            >

              <div className="flex flex-col items-center">

                <img
                  src="/provider-default.png"
                  alt={provider.business_name}
                  className="
                    w-24
                    h-24
                    rounded-full
                    object-cover
                    border-4
                    border-blue-100
                    "
                />

                <h2 className="mt-4 font-bold text-lg text-center">
                  {provider.business_name}
                </h2>

                <div className="mt-2 flex items-center gap-2">

                  <div
                    className={`
                      w-3
                      h-3
                      rounded-full
                      ${provider.is_available !== false
                        ? "bg-green-500"
                        : "bg-red-500"
                      }
                      `}
                  />

                  <span className="text-sm">
                    {
                      provider.is_available !== false
                        ? "Available"
                        : "Unavailable"
                    }
                  </span>

                </div>

                <div className="mt-2">

                  <p className="text-yellow-600 font-semibold">
                    ⭐ {provider.rating}
                  </p>

                  {

                    provider.is_verified && (

                      <p className="text-green-600 text-sm font-medium">

                        ✔ Verified Provider

                      </p>

                    )

                  }

                </div>

                <p className="text-gray-600 text-sm">
                  {provider.experience || 0} Years Experience
                </p>

                <p className="font-semibold text-blue-600 mt-2">

                  {

                    provider.payment_type === "base"

                      ?

                      `Starts from ₹${provider.base_price}`

                      :

                      `₹${provider.hourly_rate}/hour`

                  }

                </p>

                <p className="text-gray-600 text-sm mt-2">

                  💼 {provider.jobs_completed} Jobs Completed

                </p>

                <p className="text-gray-600 text-sm">

                  ⚡ {provider.response_rate}% Response Rate

                </p>

                <p className="text-gray-600 text-sm">

                  📍 {provider.district}, {provider.state}

                </p>

                <button
                  className="
                    mt-4
                    bg-blue-600
                    hover:bg-blue-700
                    text-white
                    px-4
                    py-2
                    rounded-lg
                    "
                >
                  View Profile
                </button>

              </div>

            </div>



          ))}

        </div>

      )}
     <LoginRequiredModal

isOpen={showLoginModal}

onClose={()=>setShowLoginModal(false)}

onLogin={()=>navigate("/login")}

/>
    </div>

  );
};

export default CategoryProvidersPage;