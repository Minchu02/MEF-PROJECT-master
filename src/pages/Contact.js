import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Reach out with any questions, ideas, or collaboration opportunities.</p>
      </div>

      <div className="contact-content">
        {/* Contact Form */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Your Message" required />
          <button type="submit">Send Message</button>
        </form>

        {/* Contact Info and Map */}
        <div className="contact-info">
          <h3>Reach Us At</h3>
          <p>Email: support@mefstartup.org</p>
          <p>Phone: +91 98765 43210</p>
          <p>Address: 123 Startup Street, Mysuru, Karnataka</p>

          <div className="map-container">
            <iframe
              title="MEF Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.256846957251!2d76.63938147507187!3d12.29581068795014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf7021a76b3b01%3A0xe3bfb78d73f50a0a!2sMysuru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1688893890170"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
