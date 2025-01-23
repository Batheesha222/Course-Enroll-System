import React from 'react'
import { useState } from 'react'
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from '../utils/axiosInstance'
import { toast } from 'react-toastify';


const initialFormData = {
    courseName: "",
    courseDescription: "",
};

const AddCourses = () => {

    const [formData, setFormData] = useState(initialFormData);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);

            const response = await axios.post("/CourseDetail/add", formData);
            console.log(response.data);
            toast.success("Course added successfully");
            setFormData(initialFormData);
            setLoading(false);
            navigate("/courses");
        } catch (error) {
            setLoading(false);           
            toast.error("Something went wrong");
            console.log(error)

        }

    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <form className="bg-white p-8 rounded-lg shadow-md w-full max-w-md" onSubmit={handleSubmit}>
                <h2 className="text-2xl font-bold mb-6 text-center">Add Course</h2>

                <div className="mb-4">
                    <label className="block text-gray-700">Course Name</label>
                    <input
                        className="w-full px-3 py-1 border border-gray-300 rounded-md"
                        type="text"
                        name="courseName"
                        placeholder="Course Name"
                        value={formData.courseName}
                        onChange={handleChange}
                    />
                    {/* {formError.studentEmail && <p className="text-red-500 text-sm">{formError.studentEmail}</p>} */}
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Course Description</label>
                    <input
                        className="w-full px-3 py-1 border border-gray-300 rounded-md"
                        type="tex"
                        name="courseDescription"
                        placeholder="Course Description"
                        value={formData.courseDescription}
                        onChange={handleChange}
                    />
                    {/* {formError.password && <p className="text-red-500 text-sm">{formError.password}</p>} */}
                </div>


                <div className="mb-4 flex justify-center">
                    <input
                        className="w-[70%]  bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
                        type="submit"
                        value={`${loading ? "Loading..." : "Add Course"}`}
                    />
                </div>
            </form>
        </div>
    )
}

export default AddCourses