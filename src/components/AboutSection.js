import React, { useEffect, useRef } from 'react';
import './AboutSection.css';

const AboutSection = () => {
  const elementsRef = useRef([]);
  elementsRef.current = []; // ✅ reset the array each render

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;
          if (entry.isIntersecting) {
            el.classList.add('visible');
          } else {
            el.classList.remove('visible'); // Allow re-animation
          }
        });
      },
      { threshold: 0.3 }
    );

    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      elementsRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const stats = [
    { number: '120+', label: 'Trending Startups', icon: '🚀', direction: 'from-left' },
    { number: '50+', label: 'Active Mentors', icon: '👥', direction: 'from-bottom' },
    { number: '25+', label: 'Events Annually', icon: '📅', direction: 'from-right' },
  ];

  // 📌 Helper to assign refs
  const addToRefs = (el) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  return (
    <section className="about-section">
      <div
        className="fade-in from-top"
        ref={addToRefs}
        style={{ transitionDelay: '0s' }}
      >
        <h2>About Mysuru Entrepreneurship Forum (MEF)</h2>
      </div>

      <div
        className="fade-in from-top"
        ref={addToRefs}
        style={{ transitionDelay: '0.2s' }}
      >
        <p>
          MEF is a dynamic initiative fostering innovation and startup growth across Mysuru and beyond.
          We provide support, mentorship, and exposure to aspiring entrepreneurs, helping them thrive in today’s competitive environment.
        </p>
      </div>

      <div className="stat-cards">
        {stats.map((item, index) => (
          <div
            key={index}
            className={`stat-card fade-in ${item.direction}`}
            ref={addToRefs}
            style={{ transitionDelay: `${0.4 + index * 0.3}s` }}
          >
            <div className="icon">{item.icon}</div>
            <h3>{item.number}</h3>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
