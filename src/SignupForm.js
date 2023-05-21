import React, { useState } from 'react';
// import './SignupForm.css'; // Import the CSS file
import './HomePageForm.css';




const SignupForm = ({ handleToggle }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [full_name, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [errorType, setErrorType] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        try {
          const response = await fetch('https://buildmeacv.tech/users/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              full_name,
              email,
              username,
              password
            })
          });
          const data = await response.json();
          if (response.ok) {
            // Successful signup, handle the response data (e.g., display success message)
            console.log('Signup successful', data);
            setErrorMsg(data.detail);
            setErrorType('success-msg');
          } else {
            // Handle error response (e.g., display an error message)
            console.log('Signup failed');
            setErrorMsg(data.detail);
            setErrorType('failure-msg');
          }
        } catch (error) {
          // Handle any network errors
          console.log('An error occurred during signup:', error);
        }
      };

    return (
    <div>
      <h2 className="homepage-box-form">Sign Up</h2>
      <form className="homepage-box-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={full_name}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
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
        <button className="homepage-box-button" type="submit">Sign Up</button>
      </form>
      <p>Already have an account? <span className='tab'></span>
        <button className="toggle-text" onClick={handleToggle}>
            Log in
        </button>
        </p>
    {errorMsg && <p className={errorType}>{errorMsg}</p>}

    </div>
  );
};

export default SignupForm;
