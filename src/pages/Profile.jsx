import React from 'react'
import { useAuth } from "../components/context/AuthContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  const  auth  = useAuth();

  return (
    <div className="container mx-auto p-6">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-6"
        onClick={() => navigate(-1)}
      >
        Go Back
      </button>

      <div className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">My Profile</h2>
        <div className="border-t border-gray-300 pt-4">
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-gray-600">Student Name :</h3>
            <p className="text-lg text-gray-800">{auth.studentName}</p>
          </div>

          <div className="mb-4">
            <h3 className="text-sm font-semibold text-gray-600">Email :</h3>
            <p className="text-lg text-gray-800">{auth.studentEmail}</p>
          </div>

          <div className="mb-4">
            <h3 className="text-sm font-semibold text-gray-600">Phone Number :</h3>
            <p className="text-lg text-gray-800">{auth.phoneNumber}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile