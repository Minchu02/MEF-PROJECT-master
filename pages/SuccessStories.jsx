import React, { useEffect, useRef, useState } from 'react';
import './SuccessStories.css';
import story1 from '../assets/story1.jpg';
import story2 from '../assets/story2.jpg';
import story3 from '../assets/story3.jpg';

const stories = [
  {
    id: 1,
    name: 'Kumar Urs',
    image: story1,
    subtitle: 'Founder, GreenPack | Sustainable Packaging',
    shortStory: 'Anjali launched GreenPack to replace plastic with eco materials. She scaled from 2 clients to 50+ in one year.',
    fullStory: 'Anjali launched GreenPack in Mysuru to eliminate single-use plastic. With MEF guidance, she scaled to 50+ clients, received funding, trained rural women, and now supplies sustainable packaging to businesses across Karnataka. Her story is about turning eco-consciousness into scalable entrepreneurship with real-world impact. She works closely with grassroots organizations and has been recognized by the State Sustainability Forum. GreenPack now partners with over 12 regional vendors, expanding to Tamil Nadu and Kerala. Her next mission is to build a rural training center for biodegradable manufacturing.'
  },
  {
    id: 2,
    name: 'Rahul Verma',
    image: story2,
    subtitle: 'Creator, EduReach | Rural EdTech',
    shortStory: 'Rahul built EduReach tablets for rural education. From 5 schools, it reached 300+ with MEF’s help.',
    fullStory: 'Rahul created EduReach tablets to bring digital learning to rural students. MEF connected him with NGOs and schools. In 2 years, he scaled from 5 schools to 300+, trained local educators, and created vernacular content. His mission is to democratize education using smart, low-cost tech. EduReach devices are built for offline use and include solar charging. He employs local youth for repairs and training. With recognition from state education boards, he is now piloting AI-driven adaptive learning in tribal schools.'
  },
  {
    id: 3,
    name: 'P.Kulkarni',
    image: story3,
    subtitle: 'CEO, TribeTouch | Tribal Handicrafts',
    shortStory: 'Sneha built TribeTouch to sell tribal handmade goods online, supporting 100+ artisans.',
    fullStory: 'Sneha started TribeTouch to empower tribal artisans. She built a platform to showcase handcrafted products and trained artisans in packaging and digital skills. MEF helped her connect with logistics partners and funding. Now, TribeTouch works with over 120 artisans and ships across India. Sneha has also initiated design collaborations with fashion institutes and runs digital storytelling campaigns to share artisan journeys. Her social enterprise model is being studied as part of rural MBA case studies.'
  }
];

const SuccessStories = () => {
  const [selectedStory, setSelectedStory] = useState(null);
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = refs.current;
    elements.forEach(ref => ref && observer.observe(ref));

    return () => elements.forEach(ref => ref && observer.unobserve(ref));
  }, []);

  return (
    <section className="success-section">
      <div className="section-header">
        <h1>Success Stories</h1>
        <p>Real journeys of entrepreneurs from Mysuru who turned ideas into impact with MEF's support.</p>
      </div>

      <div className="stories-wrapper">
        {stories.map((story, index) => (
          <div
            key={story.id}
            className={`story-panel ${index % 2 === 0 ? 'from-left' : 'from-right'}`}
            ref={el => (refs.current[index] = el)}
          >
            <div className="story-image">
              <img src={story.image} alt={story.name} />
            </div>
            <div className="story-text">
              <h2>{story.name}</h2>
              <h4>{story.subtitle}</h4>
              <p className="short-story">{story.shortStory}</p>
              <button onClick={() => setSelectedStory(story)}>Read More</button>
            </div>
          </div>
        ))}
      </div>

      {selectedStory && (
        <div className="story-modal">
          <div className="modal-content">
            <button onClick={() => setSelectedStory(null)}>×</button>
            <h2>{selectedStory.name}</h2>
            <h4>{selectedStory.subtitle}</h4>
            <p>{selectedStory.fullStory}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default SuccessStories;
