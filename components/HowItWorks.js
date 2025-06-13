// src/components/HowItWorks.js

import React, { useEffect } from 'react';
import './HowItWorks.css';

const steps = [
  {
    title: 'Register & Join',
    description: 'Create your profile as an entrepreneur, student, or mentor and get started.',
  },
  {
    title: 'Explore Resources',
    description: 'Access startup guides, mentorship, job boards, and government initiatives.',
  },
  {
    title: 'Connect & Grow',
    description: 'Attend events, apply for funding, showcase your startup and grow your network.',
  },
];

const HowItWorks = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          } else {
            entry.target.classList.remove('animate'); // Allow re-animation
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll('.step-card');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="how-it-works-wrapper">
      <div className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps-container">
          {steps.map((step, index) => (
            <div
              key={index}
              className="step-card"
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <div className="step-number">{index + 1}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
