
import React from 'react';
import './PageStyles.css';

const StudentResources = () => {
  return (
    <div className="page-container">
      <h2>Student Resources</h2>
      <p>Explore educational content, mentorship programs, and tools to help you take your first step into entrepreneurship.</p>

      <div className="resource-cards">
        <div className="resource-card">
          <h4>Startup Guides</h4>
          <p>Learn the basics of building a startup from scratch through curated beginner guides.</p>
        </div>
        <div className="resource-card">
          <h4>Online Webinars</h4>
          <p>Join live sessions from industry experts covering trends, startup strategy, and innovation.</p>
        </div>
        <div className="resource-card">
          <h4>Career Planning</h4>
          <p>Discover career paths in startups and entrepreneurship tailored to students.</p>
        </div>
      </div>
    </div>
  );
};

export default StudentResources;
