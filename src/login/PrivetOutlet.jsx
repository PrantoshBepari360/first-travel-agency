import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "./../hooks/useAuth";

const PrivetOutlet = () => {
  const { user, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return user?.email ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};

export default PrivetOutlet;
