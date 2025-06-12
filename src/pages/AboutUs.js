 import React, { useState } from 'react';
import './AboutUs.css';
import council1 from '../assets/founder1.jpg';
import council2 from '../assets/founder2.jpg';
import council3 from '../assets/founder3.jpg';

const councilMembers = [
  {
    id: 1,
    name: 'Ravi Shankar',
    role: 'Chairperson, MEF',
    image: council1,
    bio: 'Ravi is a visionary entrepreneur with 20+ years in the startup space. He leads MEF with a mission to empower grassroots innovators.',
  },
  {
    id: 2,
    name: 'Meera Nair',
    role: 'Co-Founder, MEF',
    image: council2,
    bio: 'Meera has worked with 50+ startups to build inclusive entrepreneurial ecosystems. She brings deep strategic expertise to MEF.',
  },
  {
    id: 3,
    name: 'Anil Kumar',
    role: 'Mentorship Lead',
    image: council3,
    bio: 'Anil is a serial founder and angel investor, mentoring over 100 entrepreneurs across India. He heads mentorship at MEF.',
  },
];

const AboutUs = () => {
  const [activeMember, setActiveMember] = useState(null);

  return (
    <div className="about-us">
      <section className="hero">
        <div className="hero-text">
          <h1>About Mysuru Entrepreneurship Forum (MEF)</h1>
          <p>
            MEF is on a mission to inspire, support, and empower entrepreneurs through funding access, mentorship, and a vibrant startup community.
          </p>
        </div>
        
      </section>

      <section className="mission-vision">
        <div className="vision">
          <h2>Our Vision</h2>
          <p>
            To foster an entrepreneurial ecosystem that drives innovation, collaboration, and sustainable impact in India and beyond.
          </p>
        </div>
        <div className="mission">
          <h2>Our Mission</h2>
          <p>
            Inspire. Empower. Connect. At MEF, we believe every entrepreneur deserves access to the tools, mentors, and resources to succeed.
          </p>
        </div>
      </section>

      <section className="council">
        <h2>Council Members</h2>
        <div className="members">
          {councilMembers.map((member) => (
            <div
              className="member-card"
              key={member.id}
              onClick={() => setActiveMember(member)}
            >
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>

        {activeMember && (
          <div className="bio-popup">
            <div className="bio-content">
              <button onClick={() => setActiveMember(null)}>X</button>
              <h3>{activeMember.name}</h3>
              <p><strong>{activeMember.role}</strong></p>
              <p>{activeMember.bio}</p>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default AboutUs;
        
