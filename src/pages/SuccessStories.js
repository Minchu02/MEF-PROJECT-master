// src/pages/SuccessStories.js

import React, { useState } from 'react';
import './SuccessStories.css';
import story1 from '../assets/story1.jpg';
import story2 from '../assets/story2.jpg';
import story3 from '../assets/story3.jpg';

const stories = [
  {
    id: 1,
    name: 'Anjali Rao',
    image: story1,
    shortStory: 'Anjali started her eco-packaging venture in Mysuru, growing from 2 to 50+ clients in 1 year.',
    fullStory: 'Anjali Rao, a young entrepreneur from Mysuru, launched GreenPack to replace plastic with eco-friendly packaging. With guidance from MEF, she scaled her operations rapidly and received seed funding from a government initiative. Her story inspires sustainable change across Karnataka.'
  },
  {
    id: 2,
    name: 'Rahul Verma',
    image: story2,
    shortStory: 'Rahul developed a rural edtech solution now used in 300+ schools across South India.',
    fullStory: 'Rahul Verma built EduReach, a low-cost educational tablet for rural students. Starting with just 5 schools, MEF’s network helped him connect with NGOs and expand rapidly. His innovation is now impacting thousands of children.'
  },
  {
    id: 3,
    name: 'Sneha Kulkarni',
    image: story3,
    shortStory: 'Sneha built a startup promoting tribal handcrafts, empowering 100+ artisans.',
    fullStory: 'Sneha Kulkarni, inspired by her travels, founded TribeTouch—a platform to sell handmade tribal products online. MEF mentorship and digital training helped her team scale and partner with major e-commerce platforms.'
  }
];

const SuccessStories = () => {
  const [selectedStory, setSelectedStory] = useState(null);

  return (
    <div className="success-stories">
      <h1>Success Stories</h1>
      <div className="stories-grid">
        {stories.map((story) => (
          <div key={story.id} className="story-card">
            <img src={story.image} alt={story.name} />
            <h3>{story.name}</h3>
            <p>{story.shortStory}</p>
            <button onClick={() => setSelectedStory(story)}>Read More</button>
          </div>
        ))}
      </div>

      {selectedStory && (
        <div className="story-modal">
          <div className="modal-content">
            <button onClick={() => setSelectedStory(null)}>X</button>
            <h2>{selectedStory.name}</h2>
            <p>{selectedStory.fullStory}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SuccessStories;
