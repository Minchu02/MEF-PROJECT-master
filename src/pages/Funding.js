import React from 'react';
import './Funding.css';
import { FaExternalLinkAlt } from 'react-icons/fa';

const fundingOpportunities = [
  {
    title: 'Startup India Seed Fund',
    description: 'Get financial assistance to start and scale your startup through government seed funding.',
    link: 'https://www.startupindia.gov.in/'
  },
  {
    title: 'Atal Innovation Mission',
    description: 'Support for innovators and entrepreneurs through incubation centers and funding.',
    link: 'https://aim.gov.in/'
  },
  {
    title: 'VC Funding Network',
    description: 'Connect with top venture capitalists ready to invest in high-potential startups.',
    link: 'https://example.com/vc-network'
  }
];

const governmentSchemes = [
  {
    title: 'MUDRA Loans',
    description: 'Micro units development and refinance agency offering loans to non-corporate, non-farm small/micro enterprises.',
    link: 'https://www.mudra.org.in/'
  },
  {
    title: 'Stand Up India',
    description: 'Support for women and SC/ST entrepreneurs with bank loans between ₹10 lakh and ₹1 crore.',
    link: 'https://www.standupmitra.in/'
  },
  {
    title: 'Credit Guarantee Scheme',
    description: 'Collateral-free credit facility to eligible MSMEs.',
    link: 'https://www.cgtmse.in/'
  }
];

const Funding = () => {
  return (
    <div className="funding-container">
      {/* Hero Section */}
      <section className="funding-hero">
        <div className="hero-content">
          <h1>Explore Funding & Investment Opportunities</h1>
          <p>Connect with resources to launch, grow, and scale your entrepreneurial journey.</p>
        </div>
      </section>

      {/* Funding Opportunities */}
      <section className="funding-section">
        <h2>Available Funding Opportunities</h2>
        <div className="card-grid">
          {fundingOpportunities.map((item, index) => (
            <div key={index} className="funding-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                Learn More <FaExternalLinkAlt />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Government Schemes */}
      <section className="funding-section">
        <h1>Government Schemes</h1>
        <div className="card-grid">
          {governmentSchemes.map((item, index) => (
            <div key={index} className="funding-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                Learn More <FaExternalLinkAlt />
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Funding;
