import {
  createContext,
  PropsWithChildren,
  useEffect,
  useMemo,
  useState,
} from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { AuthType } from "@types";

const initialValue: AuthType = {
  username: "username",
  password: "",
  id: null,
};

function useProviderAuthValue() {
  const [storedValue, setValue] = useLocalStorage("user", initialValue);

  const [auth, setAuth] = useState<AuthType>(storedValue);

  useEffect(() => {
    setValue(auth);
  }, [auth, setValue]);

  return useMemo(() => ({ auth, setAuth }), [auth, setAuth]);
}
export type Context = ReturnType<typeof useProviderAuthValue>;

export const AuthContext = createContext<Context | undefined>(undefined);

export const AuthProvider = (props: PropsWithChildren) => {
  const value = useProviderAuthValue();
  return <AuthContext.Provider value={value} {...props} />;
};
