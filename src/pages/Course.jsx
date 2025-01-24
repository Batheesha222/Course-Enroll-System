import React, { useEffect, useState } from 'react';
import axios from '../utils/axiosInstance';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../components/context/AuthContext';
import { toast } from 'react-toastify';

const Course = () => {
  const [allCourses, setAllCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const auth = useAuth();
  const studentId = auth.studentId; // Get the student ID from auth context

  const navigate = useNavigate();

  // Fetch all courses
  useEffect(() => {
    const getCourses = async () => {
      try {
        setLoading(true);

        // Fetch all courses
        const coursesResponse = await axios.get(`/CourseDetail`);
        setAllCourses(coursesResponse.data);

        // Fetch enrolled courses for the student
        const enrolledResponse = await axios.get(`/StudentCourseDetail/${studentId}`);
        setEnrolledCourses(enrolledResponse.data);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching courses:", error);
        setLoading(false);
      }
    };

    getCourses();
  }, [studentId]);

  // Handle course enrollment
  const handleEnroll = async (courseId) => {
    if (enrolledCourses.some((course) => course.courseId === courseId)) {
      toast.info("You are already enrolled in this course.");
      return;
    }

    try {
      const payload = { studentId, courseId };
      const response = await axios.post("/StudentCourseDetail/enroll", payload);

      if (response.status === 201) {
        toast.success("Successfully enrolled in the course.");
        // Update enrolled courses
        setEnrolledCourses((prev) => [...prev, { courseId }]);
      }
    } catch (error) {
      console.error("Error enrolling in course:", error);
      toast.error("Error enrolling in course. Please try again later.");
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-4">
      All Courses
      </h1>
      

      {loading ? (
        <p className="text-center text-gray-600">Loading...</p>
      ) : (
        allCourses.map((course) => {
          const isEnrolled = enrolledCourses.some((enrolled) => enrolled.courseId === course.courseId);

          return (
            <div
              className="flex justify-between items-center bg-white shadow-md rounded-lg p-4 mb-4"
              key={course.courseId}
            >
              <div className="flex items-center gap-4">
                <h3 className="text-xl font-medium text-gray-800 min-w-[150px]">
                  {course.courseName}
                </h3>
                <p className="text-gray-600">{course.courseDescription}</p>
              </div>
              <button
                className={`py-2 px-4 rounded font-bold ${
                  isEnrolled
                    ? "bg-gray-400 cursor-not-allowed text-white"
                    : "bg-green-500 hover:bg-green-700 text-white"
                }`}
                onClick={() => !isEnrolled && handleEnroll(course.courseId)} 
                disabled={isEnrolled} // Disable button 
              >
                {isEnrolled ? "Enrolled" : "Enroll"}
              </button>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Course;
