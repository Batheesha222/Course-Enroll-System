import React from 'react'
import { useAuth } from "../components/context/AuthContext";

const Profile = () => {

  const  auth  = useAuth();

  return (
  <div>
    <h1>Welcome, {auth.studentName}!</h1>
    <p>Email: {auth.studentEmail}</p>
  </div>
  )
}

export default Profile