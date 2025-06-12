import React from 'react';
import './JoinCTA.css';
import { useNavigate } from 'react-router-dom';

const JoinCTA = () => {
  const navigate = useNavigate();

  return (
    <section className="join-cta">
      <div className="cta-content">
        <h2>Ready to Join the MEF Community?</h2>
        <p>Become a part of Mysuru's vibrant startup ecosystem. Connect, grow, and innovate together!</p>
        <button onClick={() => navigate('/login')}>Login or Register</button>
      </div>
    </section>
  );
};

export default JoinCTA;
