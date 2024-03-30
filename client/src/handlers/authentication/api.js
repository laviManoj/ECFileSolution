import axios from "axios";
import { verify,Login, SignUp, } from "../common/api";


export const signIn = async (usr, pwd) => {
  try {
    const response = await fetch(
      Login,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: usr,
          password: pwd,
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to sign in");
    }

    return await response.json();
  } catch (error) {
    throw new Error("Error signing in. Please Give me valid Password");
  }
};

export const sendOtpToEmailApi = async (email) => {
  try {
      const response = await axios.post(verify, {
          email: email,
      });
      if (response.status === 200) {
          return response.data;
      } else {
          throw new Error('Failed to send OTP');
      }
  } catch (error) {
      throw new Error('Error sending OTP:', error);
  }
};

export const signupUserApi = async (formData) => {
  try {
      const response = await axios.post(SignUp, formData);
      if (response.status === 200) {
          return response.data;
      } else {
          throw new Error('Failed to create user');
      }
  } catch (error) {
      throw new Error('Error creating user:', error);
  }
};



 
