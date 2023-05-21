// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import HomePage from './HomePage';
import NotFoundPage from './NotFoundPage';
import CompleteProfile from './CompleteProfile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/duckist" Component={HomePage}/>
        <Route path="/duckist/complete-profile" Component={CompleteProfile}/>
        <Route path="*" Component={NotFoundPage}/>
      </Routes>
    </Router>
  );
}

export default App;
