import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) throw new Error("context can not be undefined");
  return context;
};
