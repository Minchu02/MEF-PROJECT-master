// src/pages/Events.js

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Events.css';

import eventImg1 from '../assets/event1.jpg';
import eventImg2 from '../assets/event2.jpg';
import eventImg3 from '../assets/event3.jpg';



const eventsData = [
  {
    id: 1,
    title: 'Startup Pitch Fest',
    date: '2025-07-15',
    description: 'Join our pitch fest to meet VCs and angels.',
    image: eventImg1,
  },
  {
    id: 2,
    title: 'Women Entrepreneurs Meet',
    date: '2025-08-05',
    description: 'A networking session for women-led startups.',
    image: eventImg2,
  },
  {
    id: 3,
    title: 'Tech Founders Summit',
    date: '2025-09-10',
    description: 'Explore tech trends and startup opportunities.',
    image: eventImg3,
  },
];

const Events = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="events-page">
      <h1 className="events-heading">Upcoming Events</h1>

      <div className="events-container">
        {eventsData.map(event => (
          <div key={event.id} className="event-card">
            <img src={event.image} alt={event.title} />
            <div className="event-details">
              <h2>{event.title}</h2>
              <p><strong>Date:</strong> {event.date}</p>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="calendar-section">
        <h2 className="calendar-heading">Event Calendar</h2>
        <Calendar
          onChange={setDate}
          value={date}
          className="custom-calendar"
        />
      </div>
    </div>
  );
};

export default Events;
