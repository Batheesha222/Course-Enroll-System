import React from 'react'
import { useState } from 'react'
import signupValidator from '../validators/signupValidator'
import axios from '../utils/axiosInstance'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const initialFormData = {
  studentName: "",
  studentEmail: "",
  password: "",
  phoneNumber: "",
};

const initialFormError = {
  studentName: "",
  studentEmail: "",
  password: "",
  phoneNumber: "",
};

const Signup = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [formError, setFormError] = useState(initialFormError);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const errors = signupValidator({
      studentName: formData.studentName,
      studentEmail: formData.studentEmail,
      password: formData.password,
      phoneNumber: formData.phoneNumber,
    });

    if (
      errors.studentName ||
      errors.studentEmail ||
      errors.password ||
      errors.phoneNumber
    ) {
      setFormError(errors);
    } else {
      try {
        setLoading(true);
        //api request
        const requestBody = {
          studentName: formData.studentName,
          studentEmail: formData.studentEmail,
          password: formData.password,
          phoneNumber: formData.phoneNumber,
        };
        const response = await axios.post("/StudentDetail/signup", requestBody);
        console.log(response)
        const data = response.data;
        toast.success(data.message);

        setFormData(initialFormData);
        setFormError(initialFormError);
        setLoading(false);
        navigate("/login");
      } catch (error) {
        setLoading(false);
        setFormError(initialFormError);
        const response = error.response;
        const data = response.data;
        toast.error(data.message);
        // console.log(error.message);
      }
    }

  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form className="bg-white p-8 rounded-lg shadow-md w-full max-w-md" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-6 text-center">Signup Form</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Student Name</label>
          <input
            className="w-full px-3 py-1 border border-gray-300 rounded-md"
            type="text"
            name="studentName"
            placeholder="Jhon Doe"
            value={formData.studentName}
            onChange={handleChange}
          />
          {formError.studentName && <p className="text-red-500 text-sm">{formError.studentName}</p>}
        </div>

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

        <div className="mb-4">
          <label className="block text-gray-700">Phone Number</label>
          <input
            className="w-full px-3 py-1 border border-gray-300 rounded-md"
            type="text"
            name="phoneNumber"
            placeholder="07********"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          {formError.phoneNumber && (
            <p className="text-red-500 text-sm">{formError.phoneNumber}</p>
          )}
        </div>

        <div className="mb-4 flex justify-center">
          <input
            className="w-[70%]  bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
            type="submit"
            value={`${loading ? "saving..." : "signup"}`}
          />
        </div>
      </form>
    </div>
  )
}

export default Signup