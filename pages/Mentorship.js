import React, { useState, useEffect } from 'react';
import './Mentorship.css';
import mentor1 from '../assets/mentor1.jpg';
import mentor2 from '../assets/mentor2.jpg';
import mentor3 from '../assets/mentor3.jpg';
import { FaLinkedin } from 'react-icons/fa';

const mentors = [
  {
    id: 1,
    name: 'Ravi Shankar',
    expertise: 'Startup Growth & Strategy',
    image: mentor1,
    bio: 'Mentored 120+ startups across Asia. Expert in pitch building and scaling.',
    linkedin: 'https://linkedin.com/in/ravishankar',
  },
  {
    id: 2,
    name: 'Meera Nair',
    expertise: 'Social Entrepreneurship & Funding',
    image: mentor2,
    bio: 'Focus on women-led ventures and social innovation.',
    linkedin: 'https://linkedin.com/in/meeranair',
  },
  {
    id: 3,
    name: 'Anil Kumar',
    expertise: 'Tech & Product Mentorship',
    image: mentor3,
    bio: 'Angel investor mentoring on MVP, hiring, and product growth.',
    linkedin: 'https://linkedin.com/in/anilkumar',
  },
];

const Mentorship = () => {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const cards = document.querySelectorAll('.mentor-card');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );
    cards.forEach(card => observer.observe(card));
    return () => cards.forEach(card => observer.unobserve(card));
  }, []);

  return (
    <div className="mentorship-container">
      <section className="about-mentorship">
        <h1>About Mentorship</h1>
        <p>
          Our mentorship program connects emerging entrepreneurs with industry veterans
          to guide, support, and inspire their startup journey.
        </p>
        <div className="mentor-actions">
          <button onClick={() => setShowForm(true)}>Become a Mentor</button>
          <button onClick={() => window.scrollTo({ top: 600, behavior: 'smooth' })}>
            Choose a Mentor
          </button>
        </div>
      </section>

      {showForm && (
        <section className="mentor-form">
          <h2>Mentor Registration Form</h2>
          <form>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="text" placeholder="Expertise Area" required />
            <textarea placeholder="Brief Bio / Experience" required />
            <button type="submit">Submit</button>
            <button type="button" className="cancel-btn" onClick={() => setShowForm(false)}>Cancel</button>
          </form>
        </section>
      )}

      <section className="mentor-list" id="mentor-list">
        <h2>Available Mentors</h2>
        <div className="mentor-cards">
          {mentors.map((mentor) => (
            <div className="mentor-card" key={mentor.id}>
              <img src={mentor.image} alt={mentor.name} />
              <h3>{mentor.name}</h3>
              <p className="expertise">{mentor.expertise}</p>
              <p className="bio">{mentor.bio}</p>
              <div className="mentor-links">
                <a href={mentor.linkedin} target="_blank" rel="noreferrer">
                  <FaLinkedin />
                </a>
                <button className="chat-btn">Chat</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="why-join">
        <h2>Why Join as a Mentor or Mentee?</h2>
        <ul>
          <li>Access to a diverse startup network</li>
          <li>Personal and professional growth</li>
          <li>Give back to the startup ecosystem</li>
        </ul>
      </section>
    </div>
  );
};

export default Mentorship;
