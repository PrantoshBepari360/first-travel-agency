import { useContext } from "react";
import { AuthContext } from "../contextApi/authProvider";

export const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};
