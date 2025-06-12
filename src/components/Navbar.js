// src/components/Navbar.js

import React from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom'; // ✅ Make sure this path matches your image location

const Navbar = () => {
  return (
    <header className="navbar">
  <div className="navbar-container">
    <div className="navbar-left">
      <img src={logo} alt="Logo" className="logo-img" />
      <a href="/" className="navbar-logo"> </a>
    </div>

    <ul className="navbar-links">
      <li><a href="/">Home</a></li>
      <li><a href="/about">About Us</a></li>
      <li><a href="/entrepreneur-hub">Entrepreneur Hub</a></li>
      <li><a href="/Funding"> Funding & Investments</a></li>
      <li><a href="/events">Events</a></li>
      <li><a href="/mentorship">Mentorship</a></li>
      <li><a href="/success-stories">Success Stories</a></li>
      <li><a href="/contact">Contact Us</a></li>
       
      
    </ul>

    <div className="navbar-buttons">
  <Link to="/login" className="login-btn">Login</Link>
  <Link to="/register" className="register-btn">Register</Link>
</div>
  </div>
</header>

  );
};

export default Navbar;
