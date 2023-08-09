import { useContext } from "react";
import { AuthContext } from "./authProvider";

export const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};
