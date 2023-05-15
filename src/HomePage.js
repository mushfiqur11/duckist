import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import DarkModeToggle from './DarkModeToggle';
import './HomePage.css';

const HomePage = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);


  const getUser = async () => {
    setAccessToken(localStorage.getItem('accessToken'));
    console.log("getUser method called");
    console.log(accessToken);
    if (accessToken){
        try {
            const response = await fetch('https://buildmeacv.tech/users/me', {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
            });
        
            if (response.ok) {
                const data = await response.json();
                setIsLoggedIn(true);
                setUserInfo(data);
            } else {
                // Handle error response
                console.log('Failed to fetch user data');
                setIsLoggedIn(true);
                // setIsLoggedIn(false);
            }
        } catch (error) {
            // Handle any network errors
            console.log('An error occurred while fetching user data:', error);
            // setIsLoggedIn(false);
            setIsLoggedIn(true);
        }
    }
  }
//   console.log(isLoggedIn);

  const handleToggle = () => {
    setIsSignUp(!isSignUp);
  };

  const handleToggleMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  const handleLogin = (token) => {
    localStorage.setItem('accessToken', token);
    // setIsLoggedIn(true);
    setUserInfo(getUser());
    // Perform any other necessary actions after successful login
  };

  return (
    <div className={`homepage-container ${isDarkMode ? 'dark-mode' : ''}`}>
      <h1>Welcome to the Duckist</h1>
        {isLoggedIn ?  <p>Hello </p>:
      (<div className={`form-container ${isDarkMode ? 'dark-mode' : ''}`}>
        {isSignUp ? (
          <SignupForm
            handleToggle={handleToggle}
          />
        ) : (
          <LoginForm
            handleToggle={handleToggle}
            onLogin={handleLogin}
          />
        )}
      </div>)
        }
      <DarkModeToggle isDarkMode={isDarkMode} onToggle={handleToggleMode} />
    </div>

  );
};

export default HomePage;
