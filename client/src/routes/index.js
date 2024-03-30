import React from 'react';
import '../styles.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupPage from '../screens/AuthScreen/Signup';
import Footer from '../component/common/Footer';
import SignIn from '../screens/AuthScreen/SignIn';
import MyAccountPage from '../screens/MyAccountScreen/Myaccount';
import { ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css';


// Define routes
const Routing = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={< SignIn/>} />
        <Route path='/sign-up' element={<SignupPage/>} />
        <Route path='/sign-up-my-account' element={<MyAccountPage/>} />
        <Route path='/my-account' element={<MyAccountPage/>} />

      </Routes>
      <Footer />
    </Router>
    <ToastContainer />
    </>
  );
};

export default Routing;
