import React, { useState } from 'react';

import Navbar from '../../component/common/NavbarProfile';
import Profile from './Profile';


const MyAccount = () => {
    const [selectedSection, setSelectedSection] = useState('profile');

    const handleSectionChange = (section) => {
        setSelectedSection(section);
    };

    const renderSection = () => {
        switch (selectedSection) {
            case 'profile':
                return <Profile />;
            default:
                return null;
        }
    };

    return (
        <>
        <Navbar/>
        <div className="flex">
            {/* Sidebar */}
            <div className="w-1/6  h-screen bg-gray-100 p-4">
                <h2 className="font-bold text-lg mb-4">My Account</h2>
                <ul>
                    <li className="mb-2">
                        <button onClick={() => handleSectionChange('profile')} className="text-blue-500 hover:text-blue-700 focus:outline-none">My Profile</button>
                    </li>

                </ul>
            </div>
            {/* Main Content */}
            <div className="flex-1 p-4">
                {renderSection()}
            </div>
        </div>
        </>
    );
}

export default MyAccount;
