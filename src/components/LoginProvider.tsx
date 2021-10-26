import React, { useContext, useState } from "react";
import { createContext } from "react";

type LoginState = {
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
};
//const [isLoggedIn, setIsLoggedIn] = useState(false);
const LoginContext = createContext<LoginState>({
  isLoggedIn: false,
  setIsLoggedIn: false,
});

const LoginProvider = ({ children }: any) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => useContext(LoginContext);
export default LoginProvider;
