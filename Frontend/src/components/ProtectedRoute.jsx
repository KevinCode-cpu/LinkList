import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {

  const DEV_MODE = true;

const token =
  localStorage.getItem("access_token");

if (!token && !DEV_MODE) {
  return <Navigate to="/login" />;
}

  return children;
};

export default ProtectedRoute;