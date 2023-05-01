import React from 'react';
import { Link } from 'react-router-dom';
import "./Landingpage.css"

const LandingPage =()=> {
  return (
    <div className="landing-page-container">

      <div className='background-img'></div>

      <div className="card-container">
      {/* <img src="background-5.jpg" alt="Amaazon Reader" className="logo" /> */}
      
        <h1 className="welcome-message">Welcome To Amazon-Reader</h1>
        <p id="message">We are an online bookstore and library, where you can purchase and borrow books from our vast collection, Your one-stop-shop for books,and more!</p>
        <div className="button-container">


        <Link to="/register" className="button">Sign Up</Link>
          <Link to="/login" className="button">Log In</Link>
        

        </div>
      </div>
      
    </div>
  );
};

export default LandingPage;