import React, { createContext, useContext, useState } from 'react'

type AuthContextType = {
  auth: any;
  login: (data: any) => void;
  logout: () => void; 
};

const AuthContext = createContext<AuthContextType>({
  auth: null, 
  login: () => {}, 
  logout: () => {}, 
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [auth, setAuth] = useState<any>(null); // Define the type for 'auth'

  const login = (data: any) => {
    setAuth(data);
  };

  const logout = () => {
    setAuth(null);
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext;
