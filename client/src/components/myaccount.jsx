import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // assuming we are using React Router for navigation
import { API_URL } from './config'; // assuming we have a configuration file with the API URL

function AccountPage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    function fetchUserData() {
      fetch(`http://127.0.0.1:3000}/users`) 
        .then(response => {
          if (!response.ok) {
            // handle error
            return Promise.reject('Error fetching user data');
          }
          return response.json();
        })
        .then(userData => {
          setUser(userData);
        })
        .catch(error => {
          console.error(error);
        });
    }
    fetchUserData();
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="account-page">
      <h1>Welcome back, {user.name}!</h1>
      <div className="user-info">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
      </div>
      <Link to="/edit-profile">Edit Profile</Link> {/* assuming we have a route for editing the user's profile */}
      <button onClick={handleLogout}>Log out</button> {/* assuming we have a function called handleLogout that logs out the user */}
    </div>
  );
}
export default AccountPage