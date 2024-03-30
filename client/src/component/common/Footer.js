import { ChevronRight } from "lucide-react";
import {
  FaFacebookSquare,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import React from "react";
import Logo from "../../assets/images/company_logo_cricket.png"


const Footer = () => {
  return (
    <footer className="w-full bg-gray-200">
      <div className="mx-auto  w-full flex max-w-6xl items-center justify-between px-4 py-2 lg:px-0">
        
        <span className="ml-4 text-lg font-bold">NEWSLETTER</span>
        <form
          action=""
          className="mt-4 inline-flex w-full rounded-26 items-center md:w-3/4"
        >
          <input
            className="flex h-10 w-full rounded-md border border-black/20 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            type="email"
            placeholder=" your Email"
          ></input>
          <button
            type="button"
            className="ml-4 rounded-full bg-black px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </form>
      </div>
      <hr className="my-8" />
      <div className="mx-auto flex max-w-6xl flex-col items-start space-x-8 md:flex-row">
        <div className="w-full px-4 md:w-1/3 lg:px-0">
          {/* <h1 className="max-w-sm text-3xl font-bold">LOGO</h1> */}
          <img src={Logo} alt="Logo" className="h-15" />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <div className="mt-8 grid grid-cols-2 gap-6 md:mt-0 lg:w-3/4 lg:grid-cols-3">
          <div className="mb-8 lg:mb-0">
            <p className="mb-6 text-lg font-semibold text-gray-700 ">Company</p>
            <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
              <a href="https://app.termly.io/document/privacy-policy/b4129fc2-180a-431e-a552-ae40e85864ed" target="blank">About us</a>
              <a href="https://app.termly.io/document/privacy-policy/b4129fc2-180a-431e-a552-ae40e85864ed" target="blank">Legal Information</a>
              <a href="https://app.termly.io/document/privacy-policy/b4129fc2-180a-431e-a552-ae40e85864ed" target="blank">Contact Us</a>
              <a href="https://app.termly.io/document/privacy-policy/b4129fc2-180a-431e-a552-ae40e85864ed" target="blank">Blogs</a>
            </ul>
          </div>

          <div className="mb-10 lg:mb-0">
            <p className="mb-6 text-lg font-semibold text-gray-700 ">
              Contact Info
            </p>
            <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
              <li>Phone : 6563449345</li>
              <li>Email : iwannaplay@thecage.com.sg</li>
              <li>
                Location :Knock Knock Food Delivery 3271 kristin ct columbus, OH
                43231 United States
              </li>
              <div className="container mx-auto flex">
                <a
                  href="https://www.facebook.com/"
                  target="blank"
                  className="mx-2"
                >
                  <FaFacebookSquare className="w-6 h-6" />
                </a>
                <a href="https://twitter.com/" target="blank" className="mx-2">
                  <FaTwitter className="w-6 h-6" />
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="blank"
                  className="mx-2"
                >
                  <FaInstagram className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="blank"
                  className="mx-2"
                >
                  <FaLinkedin className="w-6 h-6" />
                </a>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <p> © 2024 NB | All rights reserved</p>
    </footer>
  );
};

export default Footer;
