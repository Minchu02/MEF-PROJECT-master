import React, { useEffect, useState } from 'react';
import './HeroSection.css';

const slides = [
  {
    image: require('../assets/slider1.jpeg'),
    text: 'Empowering Entrepreneurial Dreams',
    button: 'Explore Success Stories',
    link: '/stories'
  },
  {
    image: require('../assets/slider2.jpeg'),
    text: 'Funding & Investment Opportunities',
    button: 'View Funding Options',
    link: '/funding'
  },
  {
    image: require('../assets/slider3.jpeg'),
    text: 'Innovate. Connect. Grow.',
    button: 'Join Our Community',
    link: '/register'
  },
  {
    image: require('../assets/slider4.jpeg'),
    text: 'Upcoming Events & Workshops',
    button: 'View Event Calendar',
    link: '/events'
  },
  {
    image: require('../assets/slider5.jpeg'),
    text: 'Mentorship That Guides You Forward',
    button: 'Meet Our Mentors',
    link: '/mentorship'
  }
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-section">
      <div
        className="hero-background"
        key={current}
        style={{ backgroundImage: `url(${slides[current].image})` }}
      />
      <div className="hero-overlay">
        <h2>{slides[current].text}</h2>
        <a href={slides[current].link} className="hero-btn">{slides[current].button}</a>
      </div>
    </div>
  );
};

export default HeroSection;
