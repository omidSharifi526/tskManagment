import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../Context/AuthProvider';

const RequierAuth = ({ children }: { children: React.ReactNode }) => {
  const token=localStorage.getItem('accessToken');
  console.log(token)
  const { auth } = useAuth();
  console.log(auth)
  if (!token) {
    return <Navigate to={'/'} replace={true} />;
  }

  return <>{children}</>; 
};

export default RequierAuth;