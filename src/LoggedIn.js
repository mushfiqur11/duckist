import React from 'react';
// import './LoginForm.css'; // Import the CSS file
import './HomePageForm.css';
import { useNavigate } from 'react-router-dom';
import cvIcon from './images/generate-cv-icon.png';
import webIcon from './images/generate-website-icon.png';
import profileIcon from './images/complete-profile-icon.png';




const LoggedIn = ({ userInfo, handleLogout, isDarkMode }) => {
    const navigate = useNavigate();
    
    const handleClick = (subPage) => {
        // Handle the click event for each icon
        if (userInfo){
            console.log(`Icon ${subPage} clicked`);
            navigate(`/duckist/${subPage}`, {state: {userInfo, isDarkMode, handleLogout}});    
        }
        // Perform any other actions or logic based on the clicked icon
      };
    
    return (
        // <div>
        //     <p className=''>Hello {userInfo.full_name} 
        //         <button onClick={handleLogout} className='toggle-text'>Logout</button>
        //     </p>
        // </div>
        <div>
            
            <div className='welcome-text'>
                <p>
                    {/* Hello {userInfo.full_name} <span class='tab'></span>  */}
                <button onClick={handleLogout} className='logout'>Logout</button>
                </p>
            </div>
            <div className="icon-container">
            
                <div className="icon" onClick={() => handleClick('complete-profile')}>
                    <img src={profileIcon} alt="Complete Profile" />
                    <p className="icon-text">Complete Profile</p>
                </div>
                <div className="icon" onClick={() => handleClick('generate-website')}>
                    <img src={webIcon} alt="Generate Website" />
                    <p className="icon-text">Generate Website</p>
                </div>
                <div className="icon" onClick={() => handleClick('generate-resume')}>
                    <img src={cvIcon} alt="Generate Resume" />
                    <p className="icon-text">Generate Resume</p>
                </div>
            </div>

            
        </div>
    );
};

export default LoggedIn;