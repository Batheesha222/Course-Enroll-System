import React, { useEffect } from 'react'
import { useAuth } from '../components/context/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from '../utils/axiosInstance';
import { useState } from 'react';
import children from '../assets/images/children.png';

const Home = () => {

  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const auth = useAuth();
  const studentId = auth.studentId;
  const studentName = auth.studentName;



  useEffect(() => {
    const getEnrolledCourses = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/StudentCourseDetail/${studentId}`);
        console.log('Enrolled Courses:', response.data)

        setEnrolledCourses(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    getEnrolledCourses();

  }, []);




  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-4xl font-bold text-center text-blue-600 mb-4">Welcome, {studentName}...!</h2>
      <div className="flex justify-center mb-6">
        <img
          src={children}
          alt="Children illustration"
          className="w-2/3 md:w-1/3 rounded-lg  object-cover"
        />
      </div>
      

      {loading ? (
        <p className="text-center text-gray-600">Loading...</p>
      ) : (
        enrolledCourses.map((course) => (
          <div
            className="p-4 bg-white shadow-md rounded-lg mb-4 flex justify-between items-start"
            key={course.courseId}
          >
            <div className="flex flex-col md:flex-row md:items-start md:gap-6 w-full">
              <h3 className="text-xl font-medium text-gray-800 min-w-[150px]">{course.courseName}</h3>
              <p className="text-gray-600 text-sm md:text-base flex-1">{course.courseDescription}</p>
            </div>
            <button className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
              Start
            </button>
          </div>
        ))
      )}
    </div>
  )
}

export default Home