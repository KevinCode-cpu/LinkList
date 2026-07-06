import React, { useEffect, useState } from "react";
import API from "../api/api";
import { useParams } from "react-router-dom";

import { getSingleService } from "../api/services";

const ServiceDetailsPage = () => {

  const { id } = useParams();

  const [service, setService] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
  

    API.get(`/public/service/${id}`)

.then((res) => {

    setService(res.data);

    setLoading(false);

})
      .catch((err) => {

        console.log(err);

        setLoading(false);

      });

  }, [id]);

  if (loading) {

    return (
      <div className="p-10 text-center">
        Loading...
      </div>
    );
  }

  if (!service) {

    return (
      <div className="p-10 text-center">
        Service not found
      </div>
    );
  }

  return (

    <div className="bg-gray-100 min-h-screen py-10 px-4">

      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-8 grid md:grid-cols-2 gap-10">

        {/* IMAGE */}

        <div>

          <img
            src="https://via.placeholder.com/500"
            alt="service"
            className="w-full rounded-2xl"
          />

        </div>

        {/* DETAILS */}

        <div>

          <h1 className="text-4xl font-bold text-gray-900">

            {service.title}

          </h1>

          <div className="mt-4 flex items-center gap-3">

            <span className="bg-green-600 text-white px-3 py-1 rounded-lg">

              ⭐ {service.average_rating || 4.5}

            </span>

            <span className="text-gray-500">

              {service.total_reviews || 0} reviews

            </span>

          </div>

          <p className="mt-6 text-gray-700 text-lg">

            {service.service.description}

          </p>

          <div className="mt-8 space-y-4 text-lg">

            <p>

              <strong>Category:</strong> {service.service.category}

            </p>

            <p>

              <strong>Experience:</strong> {service.profile.experience_years} years

            </p>

            <p>

              <strong>Charges:</strong> ₹ {service.profile.hourly_rate}/hour

            </p>

            <p>

              <strong>Location:</strong>

              {" "}

              {service.profile.locality},

              {" "}

              {service.profile.district},

              {" "}

              {service.profile.state}

            </p>

            <p>

              <strong>Status:</strong>

              <span className="text-green-600 ml-2">

                Available

              </span>

            </p>

            <p>

              <strong>Availability:</strong>

              Mon-Sat | 9AM - 7PM

            </p>

          </div>

          <button className="mt-10 w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl text-lg font-semibold">

            <a
              href={`tel:${service.profile.whatsapp}`}
            >
              <button className="...">
                Call Provider
              </button>
            </a>
            <a
              href={`https://wa.me/91${service.profile.whatsapp}`}
              target="_blank"
              rel="noreferrer"
            >
              <button className="...">
                WhatsApp
              </button>
            </a>

          </button>

        </div>

      </div>

    </div>

  );
};

export default ServiceDetailsPage;