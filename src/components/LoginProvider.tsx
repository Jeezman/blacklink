import React, { useContext, useState } from "react";
import { createContext } from "react";
import { boolean, string } from "yup";

interface IAuth {
  name: string;
  username: string;
  phoneNumber: string;
  password: string;
}
type LoginState = {
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  profile: IAuth;
  setProfile: (state: IAuth) => void;
};
//const [isLoggedIn, setIsLoggedIn] = useState(false);
const LoginContext = createContext<LoginState>({
  isLoggedIn: false,
  setIsLoggedIn: boolean,
  profile: { name: "", username: "", phoneNumber: "", password: "" },
  setProfile: (state: IAuth) => {},
});

const LoginProvider = ({ children }: any) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profile, setProfile] = useState({
    username: "",
    name: "",
    phoneNumber: "",
    password: "",
  });
  return (
    <LoginContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, profile, setProfile }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => useContext(LoginContext);
export default LoginProvider;
