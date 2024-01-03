import React from 'react';
import { useAuth } from '../../Routes/ProtectedRoutes/ProtectedRoutes';
import { Navigate } from 'react-router-dom';

const RequiredAuth: React.FC = ({ children }:any) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    // Redirect to the login page if not authenticated
    return <Navigate to="/login" replace={true} />;
  }

  return <>{children}</>;
};

export default RequiredAuth;
