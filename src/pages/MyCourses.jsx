import React, { useEffect, useState } from 'react';
import { useAuth } from '../components/context/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from '../utils/axiosInstance';
import { toast } from 'react-toastify';

const MyCourses = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const auth = useAuth();
  const studentId = auth.studentId;

  useEffect(() => {
    const getEnrolledCourses = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/StudentCourseDetail/${studentId}`);
        console.log('Enrolled Courses:', response.data);

        setEnrolledCourses(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    getEnrolledCourses();
  }, [studentId]);

  const handleUnenroll = async (courseId) => {
    try {
      // Make a DELETE request to unenroll from a course
      await axios.delete(`/StudentCourseDetail/unenroll/${studentId}/${courseId}`);

      // Update the local state to remove the unenrolled course
      setEnrolledCourses((prev) => prev.filter((course) => course.courseId !== courseId));

      toast.success("Successfully unenrolled from the course.");
    } catch (error) {
      console.error("Error unenrolling from course:", error);
      toast.error("Error unenrolling from the course. Please try again later.");
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-4">Let's start learning</h1>
      <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">My Enrolled Courses</h2>

      {loading ? (
        <p className="text-center text-gray-600">Loading...</p>
      ) : (
        enrolledCourses.map((course) => (
          <div
            className="p-4 bg-white shadow-md rounded-lg mb-4 flex justify-between items-center"
            key={course.courseId}
          >
            <div>
              <h3 className="text-xl font-medium text-gray-800">{course.courseName}</h3>
              <p className="text-gray-600">{course.courseDescription}</p>
            </div>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
              onClick={() => handleUnenroll(course.courseId)}
            >
              Unenroll
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default MyCourses;
