import React from 'react'
import { useAuth } from '../context/AuthContext'
import Navbar from '../Navbar';
import { Navigate, Outlet } from 'react-router-dom';


const PrivateLayout = () => {

    const  auth  = useAuth();
    if (!auth) {
        return <Navigate to="/login" />;
      }
  return (
    <>
      <Navbar/>
      <Outlet />
    </>
  )
}

export default PrivateLayout