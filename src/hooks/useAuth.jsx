import { useContext } from "react";
import { AuthContext } from "../context/authProvider";

export const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};
