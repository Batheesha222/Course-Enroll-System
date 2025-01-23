import React, { useEffect } from 'react'
import { useAuth } from '../components/context/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from '../utils/axiosInstance';
import { useState } from 'react';

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
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-4">Welcome {studentName}</h1>
      <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">My Enrolled Courses</h2>

      {loading ? (
        <p>Loading...</p>
      ) : (
        enrolledCourses.map((course) => (
          <div className="box-border p-4 bg-white shadow-md rounded-lg mb-4" key={course.courseId}>
            <div className="flex gap-5 items-center" >
              <h3 className="text-xl font-medium text-gray-800">{course.courseName}</h3>
              <p className="text-gray-600">{course.courseDescription}</p>
            </div>
          </div>
        ))
      )}

    </div>
  )
}

export default Home