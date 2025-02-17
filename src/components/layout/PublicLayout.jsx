import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import PublicNavbar from '../PublicNavbar'

const PublicLayout = () => {
const auth = useAuth();
  if (auth) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <PublicNavbar />
      <Outlet />
    </>
  )
}

export default PublicLayout