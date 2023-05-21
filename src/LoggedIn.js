import React from 'react';
// import './LoginForm.css'; // Import the CSS file
import './HomePageForm.css';
// import { useNavigate } from 'react-router-dom';
import cvIcon from './images/generate-cv-icon.png';
import webIcon from './images/generate-website-icon.png';
import profileIcon from './images/complete-profile-icon.png';




const LoggedIn = ({ setCurrentPage }) => {
    // const navigate = useNavigate();
    
    const handleClick = (subPage) => {
        // Handle the click event for each icon
        setCurrentPage(subPage);
        
      };
    
    return (
        <div>
            <div className="icon-container">
            
                <div className="icon" onClick={() => handleClick('CompleteProfile')}>
                    <img src={profileIcon} alt="Complete Profile" />
                    <p className="icon-text">Complete Profile</p>
                </div>
                <div className="icon" onClick={() => handleClick('GenerateWebsite')}>
                    <img src={webIcon} alt="Generate Website" />
                    <p className="icon-text">Generate Website</p>
                </div>
                <div className="icon" onClick={() => handleClick('GenerateResume')}>
                    <img src={cvIcon} alt="Generate Resume" />
                    <p className="icon-text">Generate Resume</p>
                </div>
            </div>

            
        </div>
    );
};

export default LoggedIn;