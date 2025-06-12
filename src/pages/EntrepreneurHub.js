import React from 'react';
import './EntrepreneurHub.css';
import raviImg from '../assets/ravi.jpg';
import anitaImg from '../assets/anita.jpg';

import { FaLinkedin, FaFacebook } from 'react-icons/fa';

const entrepreneurs = [
  {
    id: 1,
    name: 'Aarav Mehta',
    photo: raviImg,
    designation: 'Founder & CEO',
    company: 'GreenWave Technologies',
    companyUrl: '/company/greenwave',
    bio: 'Pioneering eco-friendly tech solutions for urban living.',
    keywords: ['Sustainability', 'IoT'],
    linkedin: 'https://linkedin.com/in/aaravmehta',
    facebook: 'https://facebook.com/aaravmehta'
  },
  {
    id: 2,
    name: 'Nisha Verma',
    photo: anitaImg,
    designation: 'Co-Founder',
    company: 'MediConnect',
    companyUrl: '/company/mediconnect',
    bio: 'Connecting rural India with urban healthcare through telemedicine.',
    keywords: ['Healthcare', 'Tech for Good'],
    linkedin: 'https://linkedin.com/in/nishaverma',
    facebook: 'https://facebook.com/nishaverma'
  },
  // Add more entrepreneurs as needed
];

const EntrepreneurHub = () => {
  return (
    <div className="entrepreneur-hub">
      <h1>Entrepreneur Hub</h1>
      <p>Discover the passionate individuals driving innovation in the MEF community.</p>
      <div className="entrepreneur-cards">
        {entrepreneurs.map((e) => (
          <div key={e.id} className="entrepreneur-card">
             <img src={e.photo} alt={e.name} className="entrepreneur-photo" />
            <h2>{e.name}</h2>
            <p className="designation">{e.designation}</p>
            <p className="company">
              <a href={e.companyUrl}>{e.company}</a>
            </p>
            <p className="bio">{e.bio}</p>
            <div className="keywords">
              {e.keywords.map((k, index) => (
                <span className="keyword" key={index}>{k}</span>
              ))}
            </div>
            <div className="social-icons">
              <a href={e.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href={e.facebook} target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EntrepreneurHub;
