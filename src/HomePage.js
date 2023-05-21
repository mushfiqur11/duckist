import React, { useState, useEffect } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import LoggedIn from './LoggedIn';
import DarkModeToggle from './DarkModeToggle';
import axios from 'axios';
import './HomePage.css';

const getUser = async (accessToken, setAccessToken, setIsLoggedIn, setUserInfo, setIsLoading) => {
  const item = localStorage.getItem('accessToken')
  if (item){
    setAccessToken(item);
  } else {
    setAccessToken('');
  }

  if (accessToken) {
    try {
      const response = await axios.get('https://buildmeacv.tech/users/me/', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (response.status === 200) {
        const data = response.data;
        // console.log(data);
        setUserInfo(data);
        setIsLoggedIn(true);
      } else {
        // Handle error response
        console.log('Failed to fetch user data');
        setIsLoggedIn(false);
      }
    } catch (error) {
      // Handle any network errors
      console.log('An error occurred while fetching user data', error);
      setIsLoggedIn(false);
    }
  }
  setIsLoading(false);
};  

const deleteUser = async (setAccessToken, setIsLoggedIn, setUserInfo) => {
  setAccessToken('');
  setIsLoggedIn(false);
  setUserInfo(null);
}
const HomePage = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [userInfo, setUserInfo] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    getUser(accessToken, setAccessToken, setIsLoggedIn, setUserInfo, setIsLoading);
  }, [accessToken]);

  
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
    getUser(accessToken, setAccessToken, setIsLoggedIn, setUserInfo, setIsLoading);
    // Perform any other necessary actions after successful login
  };

  const handleLogout = () => {
    localStorage.setItem('accessToken','');
    // setIsLoggedIn(false);
    deleteUser(setAccessToken, setIsLoggedIn, setUserInfo);
    // Perform any other necessary actions after successful logout
  };

  return (
    
    <div className={`homepage-container ${isDarkMode ? 'dark-mode-parent' : 'light-mode-parent'}`}>
      <h1>Welcome to the Duckist</h1>
        {isLoading ? (
        <div><h1>Loading ...</h1> </div>
          ) 
          : 
          (
        isLoggedIn ?  (
          <div>
            <LoggedIn
              handleLogout={handleLogout}
              userInfo={userInfo}
              isDarkMode={isDarkMode}
            />
          </div>
        )
        :
      (<div className={`form-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
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
        )
      }
      <DarkModeToggle isDarkMode={isDarkMode} onToggle={handleToggleMode} />
    </div>

  );
};

export default HomePage;
