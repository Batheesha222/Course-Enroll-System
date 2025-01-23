import React from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    window.localStorage.removeItem("blogData");
    toast.success("Logout successful");
    navigate("/login");
  };

  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="flex space-x-4">
        <NavLink
          to="/"
          className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors"
          activeClassName="bg-gray-900"
        >
          Home
        </NavLink>
        <NavLink
          to="/courses"
          className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors"
          activeClassName="bg-gray-900"
        >
          All Courses
        </NavLink>
        <NavLink
          to="/my-courses"
          className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors"
          activeClassName="bg-gray-900"
        >
          My Courses
        </NavLink>
        <NavLink
          to="/add-courses"
          className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors"
          activeClassName="bg-gray-900"
        >
          Add Courses
        </NavLink>
        <NavLink
          to="/about"
          className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors"
          activeClassName="bg-gray-900"
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors"
          activeClassName="bg-gray-900"
        >
          Contact
        </NavLink>
      </div>
      <div className="flex space-x-4">
        <NavLink
          to="/profile"
          className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors"
          activeClassName="bg-gray-900"
        >
          Profile
        </NavLink>
        <NavLink
          to="/login"
          onClick={handleLogout}
          className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors"
        >
          Logout
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar