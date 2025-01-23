import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Course from './pages/Course'
import MyCourses from './pages/MyCourses'
import Profile from './pages/Profile'
import About from './pages/About';
import Login from './pages/Login'
import Signup from './pages/Signup'
import PrivateLayout from './components/layout/PrivateLayout';
import PublicLayout from './components/layout/PublicLayout';
import AddCourses from './pages/AddCourses';


const App = () => {


  return (
    <>
      <Routes>
        <Route element={<PrivateLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Course />} />
          <Route path="/my-courses" element={<MyCourses />} />
          <Route path="/add-courses" element={<AddCourses/>} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
        </Route>
        <Route element={<PublicLayout />}>
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App