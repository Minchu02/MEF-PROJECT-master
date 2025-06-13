import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h3>About MEF</h3>
          <p>Empowering entrepreneurs in Mysuru through resources, mentorship, and funding opportunities.</p>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          
           <p><a href="/">Home</a></p> 
           <p><a href="/about">About Us</a></p> 
           <p><a href="/events">Events</a></p>
            <p><a href="/login">Login</a></p>
        </div>

        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Email: contact@mef.org</p>
          <p>Phone: +91 98765 43210</p>
          <p>Address: 123 Startup Lane, Mysuru, Karnataka</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Mysuru Entrepreneurship Forum. All rights reserved.</p>
        <p>Made with ❤️ to empower entrepreneurs in Mysuru and beyond.</p>
      </div>
    </footer>
  );
};

export default Footer;
