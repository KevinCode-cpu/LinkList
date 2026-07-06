import React,
{
  useEffect,
  useState
} from "react";

import {
  Link
} from "react-router-dom";

import {
  getSavedProviders
} from "../api/savedProviders";

import {
  removeSavedProvider
} from "../api/savedProviders";

const SavedProvidersPage = () => {

  const [providers,
  setProviders] =
  useState([]);

  useEffect(() => {

    const load =
    async () => {

      const token =
      localStorage.getItem(
        "access_token"
      );

      const data =
      await getSavedProviders(
        token
      );

      setProviders(data);

    };

    load();

  }, []);

  return (

    <div
      className="
      max-w-6xl
      mx-auto
      p-8
      "
    >

      <h1
        className="
        text-3xl
        font-bold
        mb-8
        "
      >
        Saved Providers
      </h1>

      {providers.length === 0 ? (

        <p>
          No saved providers.
        </p>

      ) : (

        providers.map(
          provider => (

          <div

            key={
              provider.provider_id
            }

            className="
            bg-white
            shadow
            rounded-xl
            p-5
            mb-4
            "
          >

            <h3
              className="
              text-xl
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

            <Link

              to={`/provider/${
                provider.provider_id
              }`}

              className="
              text-blue-600
              "
            >
              View Provider
            </Link>

            <button

              onClick={async () => {

                const token =
                  localStorage.getItem(
                    "access_token"
                  );

                await removeSavedProvider(

                  provider.provider_id,

                  token

                );

                setProviders(

                  providers.filter(

                    p =>
                    p.provider_id !==
                    provider.provider_id

                  )

                );

              }}

              className="
              ml-4
              text-red-600
              "
            >

              Remove

            </button>

          </div>

        ))

      )}

    </div>

  );
};

export default SavedProvidersPage;