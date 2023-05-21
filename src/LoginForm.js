import React, { useState } from 'react';
// import './LoginForm.css'; // Import the CSS file
import './HomePageForm.css';

const LoginForm = ({ handleToggle, onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [errorType, setErrorType] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        try {
          const formData = new FormData();
          formData.append('username', username);
          formData.append('password', password);
      
          const response = await fetch('https://buildmeacv.tech/login/token', {
            method: 'POST',
            body: formData
          });
      
          if (response.ok) {
            const data = await response.json();
            const accessToken = data.access_token;
            onLogin(accessToken); 
            // Successful login, handle the response data (e.g., store the token)
            setErrorMsg('Login successful');
            console.log('Login successful:', data);
            setErrorType('success-msg');
          } else {
            // Handle error response (e.g., display an error message)
            const data = await response.json();
            setErrorMsg( data.detail);
            console.log('Login failed', data.detail);
            setErrorType('failure-msg');
          }
        } catch (error) {
          // Handle any network errors
          console.log('An error occurred during login:', error);
        }
      };
    
    return (
        <div>
        <h2 className='homepage-box-form'>Login</h2>
        <form className="homepage-box-form" onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            />
            <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            />
            <br></br>
            <button className="homepage-box-button" type="submit">Login</button>
        </form>
        <p>Don't have an account? <span className='tab'></span>
            <button className="toggle-text" onClick={handleToggle}>
                Sign up
            </button>
        </p>
        {errorMsg && <p className={errorType}>{errorMsg}</p>}
        </div>
    );
};

export default LoginForm;

