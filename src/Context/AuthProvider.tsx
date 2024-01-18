import React, { createContext, useContext, useState,useEffect } from 'react'

type AuthContextType = {
  auth: any;
  login: (data:any) => void;
  logout: () => void; 
};


// const token=localStorage.getItem('accessToken')
const AuthContext = createContext<AuthContextType>({
  auth: null, 
  login: () => {}, 
  logout: () => {}, 
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const token=localStorage.getItem('accessToken')
  const [auth, setAuth] = useState<any>(null); // Define the type for 'auth'


  useEffect(() => {
    // Retrieve auth data from Local Storage on component mount
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      setAuth(accessToken);
    }
  }, []);


  // accessToken

  const login = (data:any) => {
    // console.log(data)
    setAuth(data);
    localStorage.setItem('accessToken', data?.accessToken);
  };

  const logout = () => {
    setAuth(null);
    localStorage.removeItem('accessToken'); 
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
