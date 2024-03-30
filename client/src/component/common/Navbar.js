import React from 'react';
import Logo from "../../assets/images/company_logo_cricket.png";

function Navbar({ isLoggedIn }) {
    return (
        <nav className="bg-gray-300 p-4 flex justify-end items-center">
            {/* Logo */}
            <img src={Logo} alt="Logo" className="h-12" />
        </nav>
    );
}

export default Navbar;
