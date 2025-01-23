import React from 'react'
import { useState } from 'react';
import loginValidator from '../validators/loginValidator';
import axios from '../utils/axiosInstance';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Signup from './Signup';


const initialFormData = {
    studentEmail: "",
    password: "",
};

const initialFormError = {
    studentEmail: "",
    password: "",

};

const Login = () => {

    // const { setAuth } = useAuth(); // Get setAuth from AuthContext

    const [formData, setFormData] = useState(initialFormData);
    const [formError, setFormError] = useState(initialFormError);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();


    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        // console.log(formData);

        const errors = loginValidator({
            studentEmail: formData.studentEmail,
            password: formData.password,
        });

        if (errors.studentEmail || errors.password) {
            setFormError(errors);
        } else {
            try {
                setLoading(true);
                //api request

                const response = await axios.post("/StudentDetail/login", formData);
                // console.log(response)

                const data = response.data;
                window.localStorage.setItem("studentData",JSON.stringify(data.data));

                toast.success(data.message);

                setFormData(initialFormData);
                setFormError(initialFormError);
                setLoading(false);
                navigate("/");

            } catch (error) {
                setLoading(false);
                setFormError(initialFormError);
                const response = error.response;
                const data = response.data;
                toast.error(data.message); //toast.error("cant signup;")
            }


        }
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form className="bg-white p-8 rounded-lg shadow-md w-full max-w-md" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-6 text-center">Login Form</h2>

        <div className="mb-4">
          <label className="block text-gray-700">Student email</label>
          <input
            className="w-full px-3 py-1 border border-gray-300 rounded-md"
            type="text"
            name="studentEmail"
            placeholder="doe@gmail.com"
            value={formData.studentEmail}
            onChange={handleChange}
          />
          {formError.studentEmail && <p className="text-red-500 text-sm">{formError.studentEmail}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            className="w-full px-3 py-1 border border-gray-300 rounded-md"
            type="password"
            name="password"
            placeholder="***********"
            value={formData.password}
            onChange={handleChange}
          />
          {formError.password && <p className="text-red-500 text-sm">{formError.password}</p>}
        </div>

        <div className="mb-6">
          <input
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
            type="submit"
            value={`${loading ? 'Loading...' : 'Login'}`}
          />
        </div>

        <div className="text-center">
          <span className="text-gray-700">Don't have an account? </span>
          <button
            type="button"
            className="text-blue-500 hover:underline"
            onClick={() => navigate('/signup')}
          >
            Signup
          </button>
        </div>
      </form>
    </div>
    )
}

export default Login