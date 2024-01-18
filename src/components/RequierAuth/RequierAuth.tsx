import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../Context/AuthProvider';
import { useSelector } from 'react-redux';
const RequierAuth = ({ children }: { children: React.ReactNode }) => {
  const token=localStorage.getItem('accessToken');
  // console.log(token)
  const { auth } = useAuth();
  // console.log(auth)
  if (!token) {
    return <Navigate to={'/'} replace={true} />;
  }

  return <>{children}</>; 
};

const ReqPhone = ({ children }: { children: React.ReactNode }) => {
  const userPhone=useSelector((state:any)=>state.loign.userPhoneNumber);

  // console.log(token)

  // console.log(auth)
  if (userPhone!=='09121223615') {
    return <Navigate to={'/'} replace={true} />;
  }

  return <>{children}</>; 
};

export  {RequierAuth,ReqPhone};