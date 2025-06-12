import React from 'react';
import './PageStyles.css';

const AnalyticsDashboard = () => {
  return (
    <div className="page-container">
      <h2>Startup Analytics</h2>
      <p>Explore growth trends and insights from the Mysuru startup ecosystem.</p>

      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h4>Growth in Startup Registrations</h4>
          <p>+45% YoY growth recorded in 2024 with increased participation from student founders.</p>
        </div>
        <div className="dashboard-card">
          <h4>Top Industries by Activity</h4>
          <p>Technology, Sustainability, and FoodTech are leading with the most active startups.</p>
        </div>
        <div className="dashboard-card">
          <h4>Funding Distribution</h4>
          <p>Average seed funding size grew by 30% across the top 10 startups in 2024.</p>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
