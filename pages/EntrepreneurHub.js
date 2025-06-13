import React, { useState } from 'react';
import './EntrepreneurHub.css';
import { FaLinkedin, FaFacebook } from 'react-icons/fa';

const entrepreneurs = [
  {
    id: 1,
    name: 'Aarav Mehta',
    photo: require('../assets/ravi.jpg'),
    designation: 'Founder & CEO',
    company: 'GreenWave Technologies',
    companyUrl: '/company/greenwave',
    bio: 'Pioneering eco-friendly tech solutions for urban living.',
    keywords: ['Sustainability', 'IoT'],
    location: 'Bengaluru',
    linkedin: 'https://linkedin.com/in/aaravmehta',
    facebook: 'https://facebook.com/aaravmehta',
    companyInfo: 'GreenWave Technologies specializes in eco-friendly tech solutions, targeting urban sustainability challenges using IoT and AI.'
  },
  {
    id: 2,
    name: 'Nisha Verma',
    photo: require('../assets/anita.jpg'),
    designation: 'Co-Founder',
    company: 'MediConnect',
    companyUrl: '/company/mediconnect',
    bio: 'Connecting rural India with urban healthcare through telemedicine.',
    keywords: ['Healthcare', 'Tech for Good'],
    location: 'Mysuru',
    linkedin: 'https://linkedin.com/in/nishaverma',
    facebook: 'https://facebook.com/nishaverma',
    companyInfo: 'MediConnect bridges rural and urban healthcare using telemedicine platforms, enhancing access for remote communities.'
  },
  {
    id: 3,
    name: 'Ravi Kumar',
    photo: '',
    designation: 'Tech Lead',
    company: 'AgroBotics',
    companyUrl: '/company/agrobotics',
    bio: 'Building AI-powered farming tools for precision agriculture.',
    keywords: ['AgriTech', 'AI'],
    location: 'Hubli',
    linkedin: 'https://linkedin.com/in/ravikumar',
    facebook: 'https://facebook.com/ravikumar',
    companyInfo: 'AgroBotics provides intelligent drone and soil monitoring systems for farmers, improving yield and efficiency through data-driven agriculture.'
  },
  {
    id: 4,
    name: 'Sneha Patil',
    photo: '',
    designation: 'Founder',
    company: 'CraftNest',
    companyUrl: '/company/craftnest',
    bio: 'Reviving rural artisanship through digital marketplaces.',
    keywords: ['Handicrafts', 'Women Empowerment'],
    location: 'Mysuru',
    linkedin: 'https://linkedin.com/in/snehapatil',
    facebook: 'https://facebook.com/snehapatil',
    companyInfo: 'CraftNest is a social enterprise connecting rural artisans to urban consumers through e-commerce, preserving heritage and creating livelihoods.'
  },
  {
    id: 5,
    name: 'Farhan Qureshi',
    photo: '',
    designation: 'Co-Founder',
    company: 'EduBridge',
    companyUrl: '/company/edubridge',
    bio: 'Transforming rural education through affordable tech.',
    keywords: ['EdTech', 'Rural Development'],
    location: 'Raichur',
    linkedin: 'https://linkedin.com/in/farhanq',
    facebook: 'https://facebook.com/farhanq',
    companyInfo: 'EduBridge delivers vernacular learning apps and solar-powered digital classrooms to bridge the education gap in underserved regions.'
  },
  {
    id: 6,
    name: 'Ananya Desai',
    photo: '',
    designation: 'CEO',
    company: 'Swastha',
    companyUrl: '/company/swastha',
    bio: 'Making preventive healthcare accessible and affordable.',
    keywords: ['HealthTech', 'Startups'],
    location: 'Bengaluru',
    linkedin: 'https://linkedin.com/in/ananyadesai',
    facebook: 'https://facebook.com/ananyadesai',
    companyInfo: 'Swastha is a health-tech startup offering mobile diagnostic vans, teleconsultation, and AI-powered health monitoring kits for early detection and prevention.'
  }
];

const getInitials = (name) => name.split(' ').map((n) => n[0]).join('').toUpperCase();

const EntrepreneurHub = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All');
  const [selectedEntrepreneur, setSelectedEntrepreneur] = useState(null);
  const [page, setPage] = useState(1);
  const perPage = 3;

  const keywordSet = new Set();
  entrepreneurs.forEach(e => e.keywords.forEach(k => keywordSet.add(k)));
  const categories = ['All', ...Array.from(keywordSet).sort()];

  const searchFiltered = entrepreneurs.filter((e) => {
    const term = searchTerm.toLowerCase();
    return (
      e.name.toLowerCase().includes(term) ||
      e.company.toLowerCase().includes(term) ||
      e.location.toLowerCase().includes(term)
    );
  });

  const categoryFiltered = category === 'All'
    ? entrepreneurs
    : entrepreneurs.filter((e) =>
        e.keywords.map(k => k.toLowerCase()).includes(category.toLowerCase())
      );

  const filtered =
    searchTerm !== ''
      ? searchFiltered
      : category !== 'All'
      ? categoryFiltered
      : entrepreneurs;

  const paginated = filtered.slice((page - 1) * perPage, page * perPage);
  const totalPages = Math.ceil(filtered.length / perPage);

  return (
    <section className="entrepreneur-hub">
      <h1>Entrepreneur Hub</h1>
      <p>Discover passionate individuals driving innovation in the MEF community.</p>

      <input
        type="text"
        placeholder="Search by name, company, keyword, or location"
        className="search-bar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <select
        className="category-dropdown"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        {categories.map((cat, idx) => (
          <option key={idx} value={cat}>{cat}</option>
        ))}
      </select>

      <div className="entrepreneur-cards">
        {paginated.map((e) => (
          <div key={e.id} className="entrepreneur-card" onClick={() => setSelectedEntrepreneur(e)}>
            {e.photo ? (
              <img src={e.photo} alt={e.name} className="entrepreneur-photo" />
            ) : (
              <div className="photo-placeholder">{getInitials(e.name)}</div>
            )}
            <h2>{e.name}</h2>
            <p className="designation">{e.designation}</p>
            <p className="company"><a href={e.companyUrl} target="_blank" rel="noopener noreferrer">{e.company}</a></p>
            <p className="location">{e.location}</p>
            <div className="keywords">
              {e.keywords.map((k, index) => <span className="keyword" key={index}>{k}</span>)}
            </div>
            <div className="social-icons">
              <a href={e.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href={e.facebook} target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={`page-btn ${page === i + 1 ? 'active' : ''}`}
            onClick={() => setPage(i + 1)}>
            {i + 1}
          </button>
        ))}
      </div>

      {selectedEntrepreneur && (
        <div className="modal-overlay" onClick={() => setSelectedEntrepreneur(null)}>
          <div className="modal horizontal-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedEntrepreneur(null)}>X</button>
            <div className="modal-horizontal-content">
              <div className="modal-left">
                {selectedEntrepreneur.photo ? (
                  <img src={selectedEntrepreneur.photo} alt={selectedEntrepreneur.name} className="modal-photo" />
                ) : (
                  <div className="photo-placeholder modal-placeholder">{getInitials(selectedEntrepreneur.name)}</div>
                )}
                <div className="social-icons">
                  <a href={selectedEntrepreneur.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                  <a href={selectedEntrepreneur.facebook} target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                </div>
              </div>
              <div className="modal-right">
                <h2>{selectedEntrepreneur.name}</h2>
                <p className="designation">{selectedEntrepreneur.designation}</p>
                <p className="location">{selectedEntrepreneur.location}</p>
                <p className="section-title">Bio</p>
                <p className="bio italic">{selectedEntrepreneur.bio}</p>
                <p className="section-title">Company</p>
                <a href={selectedEntrepreneur.companyUrl} target="_blank" rel="noopener noreferrer" className="company-link">
                  {selectedEntrepreneur.company}
                </a>
                <p className="section-title">About Company</p>
                <p className="company-info">{selectedEntrepreneur.companyInfo}</p>
                <div className="keywords">
                  {selectedEntrepreneur.keywords.map((k, i) => (
                    <span className="keyword" key={i}>{k}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default EntrepreneurHub;