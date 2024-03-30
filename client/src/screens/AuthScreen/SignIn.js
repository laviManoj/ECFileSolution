import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link, Navigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

import { signIn } from '../../handlers/authentication/api';
import Navbar from '../../component/common/Navbar'; 


const SignIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPasswordValid = password.length >= 6;

    setIsFormValid(isEmailValid && isPasswordValid);
  }, [email, password]);

  const handleSignIn = async (e) => {
    e.preventDefault();
    if (!isFormValid) {
      setError('Please enter a valid email and password OR User Not Found');
      return;
    }

    try {
      const data = await signIn(email, password);
      toast.success("Succesfully Log In")
      localStorage.setItem('token', data.token);
      setIsLoggedIn(true);
    } catch (error) {
      console.error('Error signing in:', error.message);
      toast.warning("Please enter a valid email and password OR User Not Found");
    }
  };
  
  if (isLoggedIn) {
    return <Navigate to="/my-account"  />;
  }

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} handleSignIn={handleSignIn} />
      <section className="">
        <div className="flex items-center justify-center bg-white px-4 py-10 sm:px-6 sm:py-16 lg:px-8 ">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md rounded-md border  p-2 xl:mx-auto xl:w-150 xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-2xl font-bold leading-tight text-black">Sign in to your account</h2>
            <p className="mt-2text-sm text-gray-600 ">
              Don&apos;t have an account?{' '}
              <Link to="/sign-up" className='underline inline-block text-black'>Create Account</Link>
            </p>
            <form onSubmit={handleSignIn} className="mt-8">
              <div className="space-y-5">
                <div>
                  <label htmlFor="email" className="text-base font-medium text-gray-900">
                    {' '}
                    Email address{' '}
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      placeholder="Email"
                    ></input>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="text-base font-medium text-gray-900">
                      {' '}
                      Password{' '}
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      placeholder="Password"
                    ></input>
                    <Link to="/" className="underline  inline-block w-40">
                      Forgot Password?
                    </Link>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    disabled={!isFormValid}
                    className={`inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80 ${!isFormValid && 'opacity-50 cursor-not-allowed'}`}
                  >
                    Get started <ArrowRight className="ml-2" size={16} />
                  </button>
                </div>
                {error && <p className="text-red-500">{error}</p>}
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignIn;
