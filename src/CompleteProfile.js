import React, { useState } from 'react';
// import './LoginForm.css'; // Import the CSS file
import './HomePageForm.css';
import BasicInfoForm from './BasicInfoForm';

const CompleteProfile = ({isDarkMode, setCurrentPage, userInfo}) => {
    // const userInfo = location.state.userInfo;
    // const isDarkModeGlobal = location.state.isDarkMode;
    // const handleLogout = location.state.handleLogout;
    
    return (
        <div className={`form-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
            <BasicInfoForm userInfo={userInfo} />
        </div>
    );
};

export default CompleteProfile;