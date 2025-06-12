// client/src/pages/Jobs.js

import React from 'react';
import './PageStyles.css'; // Reuse existing styles

const Jobs = () => {
  return (
    <div className="page-container">
      <h2>Startup Job Board</h2>
      <p>Explore open roles with startups in Mysuru. Apply directly and grow with innovative teams.</p>

      <div className="jobs-list">
        <div className="job-card">
          <h4>Frontend Developer</h4>
          <p><strong>Startup:</strong> MysuruTech</p>
          <p><strong>Skills:</strong> React, JavaScript, CSS</p>
          <p><strong>Location:</strong> Mysuru (Hybrid)</p>
          <button className="apply-btn">Apply Now</button>
        </div>

        <div className="job-card">
          <h4>Business Development Intern</h4>
          <p><strong>Startup:</strong> GreenFarm</p>
          <p><strong>Skills:</strong> Communication, Market Research</p>
          <p><strong>Location:</strong> Remote</p>
          <button className="apply-btn">Apply Now</button>
        </div>

        <div className="job-card">
          <h4>UI/UX Designer</h4>
          <p><strong>Startup:</strong> EduSpark</p>
          <p><strong>Skills:</strong> Figma, Adobe XD, User Research</p>
          <p><strong>Location:</strong> Mysuru</p>
          <button className="apply-btn">Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
