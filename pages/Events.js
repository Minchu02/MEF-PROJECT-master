// src/pages/Events.js

// src/pages/Events.jsx

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Events.css';
import { motion } from 'framer-motion';

import eventImg1 from '../assets/event1.jpeg';
import eventImg2 from '../assets/event2.jpeg';
import eventImg3 from '../assets/event3.jpeg';

const initialEvents = [
  {
    id: 1,
    title: 'Startup Pitch Fest',
    date: '2025-07-16',
    time: '3:00 PM – 5:00 PM',
    description: 'Join our pitch fest to meet VCs and angels.',
    image: eventImg1,
    link: 'https://example.com/startup-pitch-fest',
  },
  {
    id: 2,
    title: 'Women Entrepreneurs Meet',
    date: '2025-08-06',
    time: '11:00 AM – 1:00 PM',
    description: 'A networking session for women-led startups.',
    image: eventImg2,
    link: 'https://example.com/women-meet',
  },
  {
    id: 3,
    title: 'Tech Founders Summit',
    date: '2025-07-18',
    time: '10:00 AM – 4:00 PM',
    description: 'Explore tech trends and startup opportunities.',
    image: eventImg3,
    link: 'https://example.com/tech-summit',
  },
];

const Events = () => {
  const [events] = useState(initialEvents);
  const [selectedDate, setSelectedDate] = useState(null);

  const getTileClassName = ({ date, view }) => {
    if (view === 'month') {
      const dateStr = date.toISOString().split('T')[0];
      return events.find(ev => ev.date === dateStr) ? 'highlight-event' : null;
    }
  };

  const eventsOnSelectedDate = selectedDate
    ? events.filter(ev => ev.date === selectedDate.toISOString().split('T')[0])
    : [];

  return (
    <div className="events-page">
      <h1 className="events-heading"> Events Calendar</h1>
      

      <div className="events-calendar-section">
        <motion.div 
          className="calendar-wrapper"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Calendar
            onChange={setSelectedDate}
            value={selectedDate}
            tileClassName={getTileClassName}
            className="custom-calendar big-calendar"
          />
        </motion.div>

        <motion.div 
          className="events-list-wrapper"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>
            {selectedDate
              ? `Events on ${selectedDate.toDateString()}`
              : 'All Upcoming Events'}
          </h2>

          <div className="events-list">
            {(selectedDate ? eventsOnSelectedDate : events).map(event => (
      <motion.div
          className="event-card"
            key={event.id}
          initial={selectedDate ? { x: 100, opacity: 0 } : false}
           animate={selectedDate ? { x: 0, opacity: 1 } : false}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          whileHover={{ scale: 1.03 }}
  >
           <img src={event.image} alt={event.title} />
          <div className="event-details">
         <h2>{event.title}</h2>
         <p><strong>Date:</strong> {event.date}</p>
         <p><strong>Time:</strong> {event.time}</p>
         <p>{event.description}</p>
         <a href={event.link} className="event-link" target="_blank" rel="noopener noreferrer">
        Register Here
            </a>
             </div>
       </motion.div>
            ))}

          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Events;