import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import "react-toastify/dist/ReactToastify.css";

import "../index.css";

import profileIcon from "../../assets/images/profile.jpg";
import {
  fetchUserDatasApi,
} from "../../handlers/myaccount/api";

function Profile() {
  const [userData, setUserData] = useState(() => {
    const storedUserData = localStorage.getItem("userData");
    return storedUserData
      ? JSON.parse(storedUserData)
      : {
          email: "",
          phone: "",
          image: profileIcon,
        };
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUserData()
      .then((data) => {
        setUserData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(userData));
  }, [userData]);

  const fetchUserData = async () => {
    const token = localStorage.getItem("token");
    try {
      const userData = await fetchUserDatasApi(token);
      return userData;
    } catch (error) {
      console.error(error.message);
      return {
        email: "",
        phone: "",
        image: profileIcon,
      };
    }
  };

  return (
    <div>
      <div className="text-lg font-bold">My Profile</div>
      <div className="mt-6">
        <label className="text-base font-medium text-gray-900">Email</label>
        <button
          type="button"
          className="flex h-10 w-1/2 rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 relative"
          value={userData.email}
          readOnly
        >
          {userData.email}
          {!loading && (
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="text-green-500 ml-auto"
            />
          )}
        </button>
      </div>
      <div className="mt-6">
        <label className="text-base font-medium text-gray-900">Phone</label>

        <div className="flex items-center">
          <button
            type="button"
            className="flex h-10 w-1/2 rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 relative"
            value={userData.phone}
          >
            { userData.phone}
            {!loading && (
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-green-500 ml-auto"
              />
            )}
          </button>
        </div>
      </div>

    </div>
  );
}

export default Profile;
