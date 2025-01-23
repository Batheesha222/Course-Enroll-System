import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='bg-gray-800 p-4'>
        <NavLink to="/" className="text-white px-3 py-2 rounded-md text-sm font-medium">Home</NavLink>
        <NavLink to="/courses" className="text-white px-3 py-2 rounded-md text-sm font-medium">Courses</NavLink>
        <NavLink to="/my-courses" className="text-white px-3 py-2 rounded-md text-sm font-medium">My Courses</NavLink>
        <NavLink to="/profile" className="text-white px-3 py-2 rounded-md text-sm font-medium">Profile</NavLink>
        <NavLink to="/About" className="text-white px-3 py-2 rounded-md text-sm font-medium">About</NavLink>
        <NavLink to="/contact" className="text-white px-3 py-2 rounded-md text-sm font-medium">Contact</NavLink>
        <NavLink to="/login" className="text-white px-3 py-2 rounded-md text-sm font-medium">Login</NavLink>
        <NavLink to="/signup" className="text-white px-3 py-2 rounded-md text-sm font-medium">Signup</NavLink>
        <NavLink to="/logout" className="text-white px-3 py-2 rounded-md text-sm font-medium">Logout</NavLink>
    </nav>
  )
}

export default Navbar