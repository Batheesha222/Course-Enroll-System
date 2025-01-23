import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Course from './pages/Course'
import MyCourses from './pages/MyCourses'
import Profile from './pages/Profile'
import About from './pages/About';
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Signup from './pages/Signup'


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Course />} />
        <Route path="/my-courses" element={<MyCourses />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App