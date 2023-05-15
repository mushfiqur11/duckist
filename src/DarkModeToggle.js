import React from 'react';
import sunIcon from './images/sun.png';
import moonIcon from './images/moon.png';
import './DarkModeToggle.css';

const DarkModeToggle = ({ isDarkMode, onToggle }) => {
  return (
    <button className={`dark-mode-toggle ${isDarkMode ? 'dark-mode' : ''}`} onClick={onToggle}>
      {isDarkMode ? <img src={moonIcon} alt="Moon Icon" /> : <img src={sunIcon} alt="Sun Icon" />}
    </button>
  );
};

export default DarkModeToggle;
