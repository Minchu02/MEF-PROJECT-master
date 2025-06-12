import React, { useEffect, useState } from 'react';
import './HeroSlider.css';

const images = [
  '/images/funding.jpg',
  '/images/entrepreneur.jpg',
  '/images/success.jpg',
  '/images/events.jpg'
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-slider">
      {images.map((img, index) => (
        <div
          key={index}
          className={`slide ${index === current ? 'active' : ''}`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}
      <div className="overlay">
        <h1>Empowering Entrepreneurs Across India</h1>
        <p>Join the most dynamic entrepreneurial community in Mysuru and beyond.</p>
        <button className="cta-button">Join Now</button>
      </div>
    </div>
  );
};

export default HeroSlider;
