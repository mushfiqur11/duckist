import React, { useState } from 'react';
import './SignupForm.css'; // Import the CSS file




const SignupForm = ({ handleToggle }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        try {
          const response = await fetch('https://buildmeacv.tech/users/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              name,
              email,
              username,
              password
            })
          });
      
          if (response.ok) {
            const data = await response.json();
            // Successful signup, handle the response data (e.g., display success message)
            console.log('Signup successful:', data);
            setErrorMsg('Signup successful:');
          } else {
            // Handle error response (e.g., display an error message)
            setErrorMsg('Signup failed:');
            console.log('Signup failed');
          }
        } catch (error) {
          // Handle any network errors
          console.log('An error occurred during signup:', error);
        }
      };

    return (
    <div>
      <h2>Sign Up</h2>
      <form className="homepage-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
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
        <button type="submit">Sign Up</button>
      </form>
      <p>Already have an account? 
        <button className="login-button" onClick={handleToggle}>
            Log in
        </button>
        </p>
    {errorMsg && <p className="error-message">{errorMsg}</p>}

    </div>
  );
};

export default SignupForm;
