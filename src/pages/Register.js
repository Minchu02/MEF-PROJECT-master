import React from 'react';
import './Register.css';

const Register = () => {
  return (
    <div className="register-container">
      <h2>Create a New Account</h2>
      <form className="register-form">
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <input type="text" placeholder="Role (Entrepreneur or Visitor)" required />
        <button type="submit">Register</button>
        <p>Already have an account? <a href="/login">Login here</a></p>
      </form>
    </div>
  );
};

export default Register;
