import React from 'react';
import './PageStyles.css';

const CouncilProfiles = () => {
  return (
    <div className="page-container">
      <h2>MEF Council Members</h2>
      <p>Meet the leadership team driving the Mysuru entrepreneurial ecosystem forward.</p>

      <div className="profiles-grid">
        <div className="profile-card">
          <h4>Anjali Rao</h4>
          <p>Founder, TechBridge | Council Chair</p>
          <p className="verified">✔ Verified Council Member</p>
        </div>

        <div className="profile-card">
          <h4>Ravi Kumar</h4>
          <p>Director, GreenMysuru | Policy Advisor</p>
          <p className="verified">✔ Verified Council Member</p>
        </div>

        <div className="profile-card">
          <h4>Sneha Patil</h4>
          <p>CEO, HealthFirst | Startup Mentor</p>
          <p className="verified">✔ Verified Council Member</p>
        </div>
      </div>
    </div>
  );
};

export default CouncilProfiles;
