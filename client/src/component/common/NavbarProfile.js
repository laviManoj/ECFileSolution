import React from 'react';
import Logo from "../../assets/images/company_logo_cricket.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBell, faBars } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    return (
        <nav className="bg-gray-300 p-4 flex justify-between items-center">
            {/* Left side icons */}
            <div className="flex items-center">
                <div className='bg-white rounded-md border border-gray-800 p-2'>
                <FontAwesomeIcon icon={faBars} size="lg"  />
                <FontAwesomeIcon icon={faUser} size="lg" className="ml-4  rounded-full" />
                </div>
                <FontAwesomeIcon icon={faBell} size="lg" className="ml-4" />
            </div>
            
            {/* Logo */}
            <img src={Logo} alt="Logo" className="h-12" />
        </nav>
    );
}

export default Navbar;
