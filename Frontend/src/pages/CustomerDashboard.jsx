import React, {
  useEffect,
  useState
} from "react";

import {
    getProfile
} from "../api/profile";
import LoadingSkeleton from "@/components/LoadingSkeleton";
import {
  getMyRequests
} from "../api/callbacks";

import {
  getSavedProviders
} from "../api/savedProviders";

const CustomerDashboard = () => {

  const token =
    localStorage.getItem(
      "access_token"
    );

    const [profile,
  setProfile] =
  useState({
    full_name: "Customer",
    phone: "-",
    role: "customer",
    is_verified: false
  });

const [loading,
  setLoading] =
  useState(true);

  const [requests,
    setRequests] =
    useState([]);

  const [savedProviders,
    setSavedProviders] =
    useState([]);

  const loadData =
async () => {

  try {

    console.log(
      "TOKEN:",
      token
    );

    const user =
      await getProfile(
        token
      );

    console.log(
      "USER:",
      user
    );

    setProfile(user);

  }

  catch(err){

    console.error(
      "PROFILE ERROR:",
      err
    );

  }

  try {

    const callbacks =
      await getMyRequests(
        token
      );

    console.log(
      "CALLBACKS:",
      callbacks
    );

    setRequests(
      callbacks || []
    );

  }

  catch(err){

    console.error(
      "CALLBACK ERROR:",
      err
    );

  }

  try {

    const saved =
      await getSavedProviders(
        token
      );

    console.log(
      "SAVED:",
      saved
    );

    setSavedProviders(
      saved || []
    );

  }

  catch(err){

    console.error(
      "SAVED ERROR:",
      err
    );

  }

  setLoading(false);

};

  useEffect(() => {

    loadData();

  }, []);

  if (loading) {
    return <LoadingSkeleton />;
}

  const accepted =
    requests.filter(

      r =>
      r.status ===
      "accepted"

    ).length;

  return (

    <div className="min-h-screen bg-slate-100">

      {/* Banner */}

      <div
        className="
        bg-gradient-to-r
        from-blue-700
        to-indigo-700
        text-white
        "
      >

        <div
          className="
          max-w-7xl
          mx-auto
          px-6
          py-10
          "
        >

          <h1
            className="
            text-4xl
            font-bold
            "
          >

            Welcome,
            {profile.full_name}
            👋

          </h1>

          <p className="mt-2">

            Manage your
            requests,
            saved providers
            and account.

          </p>

        </div>

      </div>

      <div
        className="
        max-w-7xl
        mx-auto
        p-6
        "
      >

        {/* Stats */}

        <div
          className="
          grid
          grid-cols-2
          lg:grid-cols-4
          gap-5
          mb-8
          "
        >

          <div
            className="
            bg-white
            rounded-xl
            shadow
            p-6
            "
          >

            <div
              className="
              text-gray-500
              "
            >
              Saved Providers
            </div>

            <div
              className="
              text-3xl
              font-bold
              mt-2
              "
            >
              {
                savedProviders.length
              }
            </div>

          </div>

          <div
            className="
            bg-white
            rounded-xl
            shadow
            p-6
            "
          >

            <div
              className="
              text-gray-500
              "
            >
              Callback Requests
            </div>

            <div
              className="
              text-3xl
              font-bold
              mt-2
              "
            >
              {
                requests.length
              }
            </div>

          </div>

          <div
            className="
            bg-white
            rounded-xl
            shadow
            p-6
            "
          >

            <div
              className="
              text-gray-500
              "
            >
              Accepted
            </div>

            <div
              className="
              text-3xl
              font-bold
              mt-2
              "
            >
              {accepted}
            </div>

          </div>

          <div
            className="
            bg-white
            rounded-xl
            shadow
            p-6
            "
          >

            <div
              className="
              text-gray-500
              "
            >
              Recently Viewed
            </div>

            <div
              className="
              text-3xl
              font-bold
              mt-2
              "
            >
              
            </div>

          </div>

        </div>

        {/* Callback Requests */}

        <div
          className="
          bg-white
          rounded-xl
          shadow
          p-6
          mb-8
          "
        >

          <h2
            className="
            text-2xl
            font-bold
            mb-5
            "
          >

            My Callback Requests

          </h2>

          {
            requests.length === 0
            ?

            <p>
              No requests yet.
            </p>

            :

            requests.map((req)=>(

              <div

                key={req.id}

                className="
                border-b
                py-4
                "

              >

                <p>
                  Provider:
                  {req.provider_name}
                </p>

                <p>
                  Time:
                  {req.requested_time}
                </p>

                <p>
                  Status:
                  {req.status}
                </p>

                {
                  req.phone && (

                    <p
                      className="
                      text-green-600
                      font-semibold
                      "
                    >

                      Phone:
                      {req.phone}

                    </p>

                  )
                }

              </div>

            ))

          }

        </div>

        {/* Saved Providers */}

        <div
          className="
          bg-white
          rounded-xl
          shadow
          p-6
          mb-8
          "
        >

          <h2
            className="
            text-2xl
            font-bold
            mb-5
            "
          >

            Saved Providers

          </h2>

          {
            savedProviders.length === 0
            ?

            <p>
              No saved providers.
            </p>

            :

            <div
              className="
              grid
              grid-cols-1
              md:grid-cols-2
              gap-4
              "
            >

              {
                savedProviders.map(
                  (provider)=>(
                  <div

                    key={
                      provider.provider_id
                    }

                    className="
                    border
                    rounded-xl
                    p-4
                    "

                  >

                    <h3
                      className="
                      font-bold
                      "
                    >
                      {
                        provider.business_name
                      }
                    </h3>

                    <p>
                      Experience:
                      {
                        provider.experience
                      }
                      Years
                    </p>

                    <p>
                      WhatsApp:
                      {
                        provider.whatsapp
                      }
                    </p>

                  </div>
                ))
              }

            </div>

          }

        </div>

        {/* Account */}

        <div
          className="
          bg-white
          rounded-xl
          shadow
          p-6
          "
        >

          <h2
            className="
            text-2xl
            font-bold
            mb-5
            "
          >

            Account Summary

          </h2>

          <p>
            Name:
            {profile.full_name}
          </p>

          <p>
            Phone:
            {profile.phone}
          </p>

          <p>
            Role:
            {profile.role}
          </p>

          <p>
            Verified:
            {
              profile.is_verified
                ? "Yes"
                : "No"
            }
          </p>

        </div>

      </div>

    </div>

  );

};

export default CustomerDashboard;

