import { useContext } from "react";
import AuthContext from "../../../../adapters/contexts/authContext";

export function useAuth() {
  return useContext(AuthContext);
}