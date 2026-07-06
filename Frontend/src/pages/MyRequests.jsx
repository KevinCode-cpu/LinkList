import { useEffect, useState } from "react";
import api from "../api";

export default function MyRequests() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    api.get("/callbacks/my")
      .then((res) => setRequests(res.data))
      .catch(console.error);
  }, []);

  return (
    <div className="container">
      <h2>My Requests</h2>

      {requests.map((req) => (
        <div
          key={req.id}
          className="card"
          style={{
            marginBottom: "12px",
            padding: "12px"
          }}
        >
          <p>
            Request #{req.id}
          </p>

          <p>
            Status:
            <strong>
              {" "}
              {req.status}
            </strong>
          </p>

          <p>
            Created:
            {" "}
            {new Date(
              req.created_at
            ).toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  );
}