import { createContext } from "react";
import { useFirebase } from "../hooks/useFirebase";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const allContexts = useFirebase();
  return (
    <AuthContext.Provider value={allContexts}>{children}</AuthContext.Provider>
  );
};
