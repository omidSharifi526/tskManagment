import React from 'react';
import { useAuth } from '../../Context/AuthProvider';
import { Navigate } from 'react-router-dom';

const RequierAuth = ({children}:any) => {
    const auth=useAuth();
    console.log(auth)
    if (!auth.auth) {
       return <Navigate to={'/'}  />
    }
   
   
    return children
   
  
}

export default RequierAuth