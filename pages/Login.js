import React from 'react';
import './Login.css';

const Login = () => {
  return (
  <div className="background-container">
    <div className="login-container">
      <h2>Login to Your Account</h2>
      <form className="login-form">
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <div className="button-wrapper">
        <button type="submit">Login</button>
        </div>
        <p>Don't have an account? <a href="/register">Register here</a></p>
       
      </form>
    </div>
  </div>
  );
};

export default Login;
