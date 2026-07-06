import React, {
  useEffect,
  useState
} from "react";

import {
  getMyRequests
} from "../api/callbacks";

const MyRequestsPage = () => {

  const [requests,
  setRequests] =
    useState([]);

  useEffect(() => {

    const load =
      async () => {

        const token =
          localStorage.getItem(
            "access_token"
          );

        const data =
          await getMyRequests(
            token
          );

        setRequests(data);

      };

    load();

  }, []);

  return (

    <div className="max-w-6xl mx-auto p-8">

      <h1
        className="
        text-3xl
        font-bold
        mb-6
        "
      >
        My Callback Requests
      </h1>

      {

        requests.map((req) => (

          <div

            key={req.id}

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
              font-bold
              text-lg
              "
            >
              {
                req.provider_name
              }
            </h3>

            <p>
              Requested:
              {
                req.requested_time
              }
            </p>

            <p>
              Status:
              {
                req.status
              }
            </p>

            {

              req.phone && (

                <div
                  className="
                  mt-3
                  p-3
                  bg-green-100
                  rounded-lg
                  "
                >

                  Provider Number:

                  <strong>
                    {req.phone}
                  </strong>

                </div>

              )

            }

          </div>

        ))

      }

    </div>

  );
};

export default MyRequestsPage;