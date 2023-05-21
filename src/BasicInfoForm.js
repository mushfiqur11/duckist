import React, { useState } from 'react';
// import './LoginForm.css'; // Import the CSS file
import './HomePageForm.css';


const BasicInfoForm = ({ userInfo }) => {
    const [full_name, setFullName] = useState(userInfo.full_name);
    const [pronouns, setPronouns] = useState(userInfo.pronouns);
    const [summary, setSummary] = useState(userInfo.summary);
    const [bio, setBio] = useState(userInfo.bio);
    const [career_role, setCareerRole] = useState(userInfo.career_role);
    const [profile_img, setProfileImg] = useState(userInfo.profile_img);
    const [cover_img, setCoverImg] = useState(userInfo.cover_img);
    const [thumb_img, setThumbImg] = useState(userInfo.thumb_img);

    const [accessToken, setAccessToken] = useState(null);

    const [errorMsg, setErrorMsg] = useState('');
    const [errorType, setErrorType] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('accessToken');
        setAccessToken(token);

        console.log(accessToken);
        if (!accessToken) {
          setErrorMsg('Could not retrieve access token');
          setErrorType('failure-msg');
        }
        else {
          const data = {
            full_name: full_name,
            pronouns: pronouns,
            summary: summary,
            bio: bio,
            career_role: career_role,
            thumb_img: thumb_img,
            profile_img: profile_img,
            cover_img: cover_img
          }
          const filteredData = JSON.stringify(Object.fromEntries(
            Object.entries(data).filter(([_, value]) => value !== "")
          ));
          console.log(filteredData);       

          try {
                    
            const response = await fetch('https://buildmeacv.tech/users/me/', {
              method: 'PATCH',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
              },
              body: filteredData
            });
        
            if (response.ok) {
              const data = await response.json();
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
        }
      };
    
    return (
        <div>
        <h2 className='homepage-box-form'>Basic Profile</h2>
        <form className="homepage-box-form" onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Name"
            value={full_name}
            onChange={(e) => setFullName(e.target.value)}
            />
            <input
            type="text"
            placeholder="Pronouns"
            value={pronouns}
            onChange={(e) => setPronouns(e.target.value)}
            />
            <input
            type="text"
            placeholder="Summary"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            />
            <input
            type="text"
            placeholder="Bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            />
            <input
            type="text"
            placeholder="CareerInfo"
            value={career_role}
            onChange={(e) => setCareerRole(e.target.value)}
            />
            <input
            type="file"
            placeholder="Profile Image"
            accept="image/*"
            onChange={(e) => setProfileImg(e.target.files[0])}
            />
            <input
            type="file"
            placeholder="Cover Image"
            accept="image/*"
            onChange={(e) => setCoverImg(e.target.files[0])}
            />
            <input
            type="file"
            placeholder="Thumb Image"
            accept="image/*"
            onChange={(e) => setThumbImg(e.target.files[0])}
            />
            <br></br>
            <button className="homepage-box-button" type="submit">Save and Continue</button>
        </form>
        {/* <p>Don't have an account? <span className='tab'></span>
            <button className="toggle-text" onClick={handleToggle}>
                Save and Continue
            </button>
        </p> */}
        {errorMsg && <p className={errorType}>{errorMsg}</p>}
        </div>
    );
};

export default BasicInfoForm;

