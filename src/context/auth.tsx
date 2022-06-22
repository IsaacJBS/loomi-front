/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useContext } from "react";
import { useLocalStorage } from "react-use";

type AuthContextData = {
  token: string | undefined;
  setToken: React.Dispatch<React.SetStateAction<string | undefined>>;
  removeToken: () => void;
};

type UserContext = {
  children: React.ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

export default function UserContextProvider({ children }: UserContext) {
  const [token, setToken, removeToken] = useLocalStorage("token", "");

  return (
    <AuthContext.Provider value={{ token, setToken, removeToken }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
