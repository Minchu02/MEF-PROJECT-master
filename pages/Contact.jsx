import React, { useEffect } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.slide-in');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <div className="contact-container">
      <div className="contact-header slide-in">
        <h1>Contact Us</h1>
        <p>
          We’d love to hear from you! Whether you have questions, feedback, or partnership ideas —
          feel free to reach out.
        </p>
      </div>

      <div className="contact-content">
        {/* Contact Form */}
        <form className="contact-form slide-in">
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" name="name" placeholder="Enter your full name" required />

          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required />

          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" name="subject" placeholder="Reason for contact" />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Type your message here"
            rows="6"
            required
          />

          <button type="submit">Send Message</button>
        </form>

        {/* Contact Information */}
        <div className="contact-info slide-in">
          <h3>Reach Us At</h3>
          <p><strong>Email:</strong> support@mefstartup.org</p>
          <p><strong>Phone:</strong> +91 98765 43210</p>
          <p><strong>Address:</strong> 123 Startup Street, Mysuru, Karnataka</p>

          <div className="map-container">
            <iframe
              title="Mysuru Entrepreneurship Forum Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.256846957251!2d76.63938147507187!3d12.29581068795014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf7021a76b3b01%3A0xe3bfb78d73f50a0a!2sMysuru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1688893890170"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" title="Facebook">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook icon" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" title="LinkedIn">
              <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn icon" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" title="Twitter">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
