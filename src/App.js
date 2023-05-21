// import logo from './logo.svg';
import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import HomePage from './HomePage';
// import NotFoundPage from './NotFoundPage';
import CompleteProfile from './CompleteProfile';
import { useState } from 'react';
import DarkModeToggle from './DarkModeToggle';
import './App.css';

function App() {
  const [userInfo, setUserInfo] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState('Home');

  const handleToggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };
  console.log(userInfo);
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/duckist" Component={HomePage}/>
    //     <Route path="/duckist/complete-profile" Component={CompleteProfile}/>
    //     <Route path="*" Component={NotFoundPage}/>
    //   </Routes>
    // </Router>
      <div className={`base-app ${isDarkMode ? 'dark-mode-parent' : 'light-mode-parent'}`} >
      {currentPage === 'Home' && <HomePage isDarkMode={isDarkMode} setCurrentPage={setCurrentPage} setUserInfo={setUserInfo}/>}
      {currentPage === 'CompleteProfile' && userInfo && <CompleteProfile isDarkMode={isDarkMode} setCurrentPage={setCurrentPage} userInfo={userInfo}/>}
      <DarkModeToggle isDarkMode={isDarkMode} onToggle={handleToggleDarkMode} />
    </div>
  );
}

export default App;
