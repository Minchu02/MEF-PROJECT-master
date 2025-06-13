import React, { useState } from 'react';
import './Register.css';

const Register = () => {
  const [accountType, setAccountType] = useState('visitor');
  const [formData, setFormData] = useState({});

  const handleTypeChange = (type) => {
    setAccountType(type);
    setFormData({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // TODO: Send to backend with Axios
  };

  return (
   <div className="backgroundcontainer">
      <div className="register-container">
      
      <h1>Register</h1>
      <div className="account-type-toggle">
        <button
          className={accountType === 'visitor' ? 'active' : ''}
          onClick={() => handleTypeChange('visitor')}
        >
          Visitor
        </button>
        <button
          className={accountType === 'entrepreneur' ? 'active' : ''}
          onClick={() => handleTypeChange('entrepreneur')}
        >
          Entrepreneur
        </button>
      </div>

      <form onSubmit={handleSubmit} className="register-form">
        <input type="text" name="fullName" placeholder="Full Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email Address" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} required />

        {accountType === 'visitor' && (
          <>
            <select name="visitorType" onChange={handleChange} required>
              <option value="">Select Visitor Type</option>
              <option value="Student">Student</option>
              <option value="Investor">Investor</option>
              <option value="General Public">General Public</option>
            </select>
          </>
        )}

        {accountType === 'entrepreneur' && (
          <>
            <input type="text" name="businessName" placeholder="Business Name" onChange={handleChange} required />
            <input type="text" name="website" placeholder="Website (Optional)" onChange={handleChange} />
            <input type="text" name="industry" placeholder="Industry" onChange={handleChange} required />
            <input type="text" name="location" placeholder="Business Location" onChange={handleChange} required />
            <input type="number" name="years" placeholder="Years in Business" onChange={handleChange} required />
            <input type="tel" name="contact" placeholder="Contact Number" onChange={handleChange} required />
            <textarea name="description" placeholder="Short Business Description" onChange={handleChange} required />
          </>
        )}

        <button type="submit">Sign Up</button>
      </form>
    </div>
    </div>
  );
};

export default Register;
