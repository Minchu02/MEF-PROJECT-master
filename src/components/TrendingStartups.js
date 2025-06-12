import React, { useEffect } from 'react';
import './TrendingStartups.css';
import startup1 from '../assets/startup1.jpg';
import startup2 from '../assets/startup2.jpg';
import startup3 from '../assets/startup3.jpg';

const startups = [
  { name: 'AgroNext', founder: 'Ravi Kumar', stage: 'Seed', keywords: ['Agritech', 'Sustainability'], image: startup1 },
  { name: 'MediSmart', founder: 'Dr. Anita Rao', stage: 'Series A', keywords: ['Healthcare', 'AI'], image: startup2 },
  { name: 'SkillHive', founder: 'Megha S', stage: 'Bootstrapped', keywords: ['EdTech', 'Skills'], image: startup3 },
];

const TrendingStartups = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          } else {
            entry.target.classList.remove('animate'); // so it animates every scroll
          }
        });
      },
      { threshold: 0.3 }
    );

    const cards = document.querySelectorAll('.startup-card');
    cards.forEach(card => observer.observe(card));

    return () => {
      cards.forEach(card => observer.unobserve(card));
    };
  }, []);

  return (
    <section className="trending-section">
      <h2 className="section-title">Trending Startups</h2>
      <div className="startup-cards">
        {startups.map((startup, index) => {
          const direction = index % 3 === 0 ? 'from-right' : index % 3 === 1 ? 'from-left' : 'from-bottom';
          return (
            <div
              key={index}
              className={`startup-card ${direction}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <img src={startup.image} alt={startup.name} className="startup-image" />
              <h3>{startup.name}</h3>
              <p><strong>Founder:</strong> {startup.founder}</p>
              <p><strong>Stage:</strong> {startup.stage}</p>
              <p className="keywords">{startup.keywords.join(', ')}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TrendingStartups;
