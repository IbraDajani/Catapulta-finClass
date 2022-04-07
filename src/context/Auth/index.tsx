import React, { createContext, useState } from "react";

interface ContextProps {
  isLogged: boolean;
  login: () => void;
  logout: () => void;
}

export const AuthContext = createContext({} as ContextProps);

import { View } from "react-native";

// import { Container } from './styles';

const AuthProvider: React.FC = ({ children }) => {
  const [isLogged, setIsLogged] = useState<boolean>(false);

  const login = () => {
    setIsLogged(true);
  };
  const logout = () => {
    setIsLogged(false);
  };

  return (
    <AuthContext.Provider value={{ isLogged, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
