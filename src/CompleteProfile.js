import React, { useState } from 'react';
// import './LoginForm.css'; // Import the CSS file
import './HomePageForm.css';
import { useLocation } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';
import BasicInfoForm from './BasicInfoForm';

const CompleteProfile = ({route, navigation}) => {
    const location = useLocation();
    // const userInfo = location.state.userInfo;
    // const isDarkModeGlobal = location.state.isDarkMode;
    // const handleLogout = location.state.handleLogout;

    // console.log(userInfo);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleToggleMode = () => {
        setIsDarkMode(prevMode => !prevMode);
      };

    const userInfo = {full_name:'Ankan'}
    

    // useEffect(() => {
    //     // Code to run on component mount
    //     console.log(userInfo);
    //     // Cleanup function (optional) to run on component unmount
    //     // return () => {
    //     //   // Cleanup code here
    //     // };
    //   }, [userInfo]);
    
    return (
        <div className={`homepage-container ${isDarkMode ? 'dark-mode-parent' : 'light-mode-parent'}`}>
            
            <div>
                    <div className={`form-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
                
                <BasicInfoForm userInfo={userInfo} />
                
            </div>
                <DarkModeToggle isDarkMode={isDarkMode} onToggle={handleToggleMode} />
            </div>
            
        </div>
    );
};

export default CompleteProfile;