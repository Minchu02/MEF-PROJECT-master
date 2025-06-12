import React, { useState } from 'react';
import './Mentorship.css';
import mentor1 from '../assets/mentor1.jpg';
import mentor2 from '../assets/mentor2.jpg';
import mentor3 from '../assets/mentor3.jpg';


const mentors = [
  {
    id: 1,
    name: 'Ravi Shankar',
    expertise: 'Startup Growth & Strategy',
    image: mentor1,
    bio: 'Ravi has mentored over 120 early-stage startups in India and Southeast Asia. He specializes in market expansion and pitch building.',
    linkedin: 'https://linkedin.com/in/ravishankar',
  },
  {
    id: 2,
    name: 'Meera Nair',
    expertise: 'Social Entrepreneurship & Funding',
    image: mentor2,
    bio: 'Meera is a leading voice in social innovation and fundraising. She works with women-led ventures and impact startups.',
    linkedin: 'https://linkedin.com/in/meeranair',
  },
  {
    id: 3,
    name: 'Anil Kumar',
    expertise: 'Tech & Product Mentorship',
    image: mentor3,
    bio: 'Anil is a tech entrepreneur and angel investor. He mentors on MVP design, product scaling, and developer hiring.',
    linkedin: 'https://linkedin.com/in/anilkumar',
  },
];

const Mentorship = () => {
  const [selectedMentor, setSelectedMentor] = useState(null);

  return (
    
    <div className="mentorship-page">
      <div className="mentorship-hero">
        <h1>Meet Our Mentors</h1>
        <p>
          Industry experts guiding entrepreneurs with insights, advice, and strategic support across domains.
        </p>
      </div>

      <div className="mentorship-cards">
        {mentors.map((mentor) => (
          <div className="card" key={mentor.id} onClick={() => setSelectedMentor(mentor)}>
            <img src={mentor.image} alt={mentor.name} className="mentor-img" />
            <h2>{mentor.name}</h2>
            <p>{mentor.expertise}</p>
            <button>View Profile</button>
          </div>
        ))}
      </div>
       <div className="mentorship-page">
      <section className="mentorship-hero">
        <h1>Mentorship Program</h1>
        <p>Connect with experienced mentors to guide your entrepreneurial journey or give back by mentoring others.</p>
      </section>

      <section className="mentorship-cards">
        <div className="card mentor-request">
          <h2>Find a Mentor</h2>
          <p>Looking for someone to guide your startup journey? Let us help match you with the right mentor.</p>
          <button>Request Mentor</button>
        </div>

        <div className="card mentor-offer">
          <h2>Become a Mentor</h2>
          <p>Ready to inspire the next generation of entrepreneurs? Join us as a mentor and make an impact.</p>
          <button>Offer Mentorship</button>
        </div>
      </section>

      <section className="how-it-works">
        <h2>How It Works</h2>
        <ol>
          <li>Submit your interest to be matched or to mentor</li>
          <li>We match based on industry and experience</li>
          <li>Engage in 1:1 or group sessions regularly</li>
        </ol>
      </section>

      <section className="benefits">
        <h2>Why Join?</h2>
        <ul>
          <li>Real-world advice from industry leaders</li>
          <li>Boost your startup confidence</li>
          <li>Expand your network and vision</li>
        </ul>
      </section>
    </div>

      {selectedMentor && (
        <div className="modal-overlay" onClick={() => setSelectedMentor(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <img src={selectedMentor.image} alt={selectedMentor.name} className="modal-img" />
            <h3>{selectedMentor.name}</h3>
            <p><strong>{selectedMentor.expertise}</strong></p>
            <p>{selectedMentor.bio}</p>
            <a href={selectedMentor.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
            <button className="close-btn" onClick={() => setSelectedMentor(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Mentorship;
