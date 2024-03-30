import React, { useState } from "react";
import axios from "axios";
import "../index.css";
import { toast } from "react-toastify";
import { Link, Navigate } from "react-router-dom";

import Navbar from "../../component/common/Navbar";
import { sendOtpToEmailApi } from '../../handlers/authentication/api';
import { SignUp, } from "../../handlers/common/api";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    otp: "",
    password: "",
    profileImage: null,
  });
  const [isSignup, setIsSignUp] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, profileImage: e.target.files[0] });
  };

  const handleVerifyEmail = async () => {
    try {
        await sendOtpToEmailApi(formData.email);
        toast.success(`We are sending OTP to register ${formData.email}`);
    } catch (error) {
        console.error(error.message);
    }
};

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const datas = new FormData();
    datas.append("name", formData.name);
    datas.append("email", formData.email);
    datas.append("phone", formData.phone);
    datas.append("otp", formData.otp);
    datas.append("password", formData.password);
    datas.append("profileImage", formData.profileImage);
  
    try {
      const response = await axios.post(
        SignUp,
        datas
      );
      toast.success("User Created Successfully");
      setIsSignUp(true);
      console.log(response);
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An error occurred while creating the user.");
      }
      console.error(error.response);
    }
  };
  

  if (isSignup) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Navbar />
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
            <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
                Sign up
              </h2>
              <p className="mt-2 text-base text-gray-600">
                Already have an account?
                <Link to="/" className="underline inline-block text-black">
                  {" "}
                  Sign In{" "}
                </Link>
              </p>
              <form className="mt-8" onSubmit={handleSubmit}>
                <div className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-base font-medium text-gray-900"
                    >
                      {" "}
                      Full Name{" "}
                    </label>
                    <div className="mt-2">
                      <input
                        className="input border-2 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                        type="text"
                        id="name"
                        onChange={handleChange}
                        value={formData.name}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="text-base font-medium text-gray-900"
                    >
                      {" "}
                      Email address{" "}
                    </label>
                    <div className="flex items-center mt-2">
                      <input
                        className="input border-2 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                        type="email"
                        id="email"
                        onChange={handleChange}
                        value={formData.email}
                        required
                      />
                      <button
                        onClick={handleVerifyEmail}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      >
                        Verify
                      </button>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="otp"
                      className="text-base font-medium text-gray-900"
                    >
                      {" "}
                      OTP Verification{" "}
                    </label>
                    <div className="mt-2">
                      <input
                        className="input border-2 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                        type="text"
                        id="otp"
                        onChange={handleChange}
                        value={formData.otp}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="text-base font-medium text-gray-900"
                    >
                      {" "}
                      Phone Number{" "}
                    </label>
                    <div className="mt-2">
                      <input
                        className="input border-2 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                        type="text"
                        id="phone"
                        onChange={handleChange}
                        value={formData.phone}
                        pattern="[6-9]\d{9}" 
                        title="Mobile number should start with 6, 7, 8, or 9 and must be 10 digits long"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="text-base font-medium text-gray-900"
                    >
                      {" "}
                      Password{" "}
                    </label>
                    <div className="mt-2">
                      <input
                        className="input border-2 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                        type="text"
                        id="password"
                        onChange={handleChange}
                        value={formData.password}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="profileImage"
                      className="text-base font-medium text-gray-900"
                    >
                      Profile Image
                    </label>
                    <div className="mt-2">
                      <input
                        className="input"
                        type="file"
                        id="profileImage"
                        onChange={handleFileChange}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="submit-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Create Account
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="h-full w-full">
            <img
              className="mx-auto h-full w-full rounded-md object-cover"
              src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1742&amp;q=80"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
