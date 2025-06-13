import React, { useState, useEffect } from 'react';
import './Funding.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaExternalLinkAlt, FaLinkedin } from 'react-icons/fa';



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
    description: 'Loans for small/micro non-corporate enterprises.',
    link: 'https://www.mudra.org.in/'
  },
  {
    title: 'Stand Up India',
    description: 'Support for women and SC/ST entrepreneurs.',
    link: 'https://www.standupmitra.in/'
  },
  {
    title: 'Credit Guarantee Scheme',
    description: 'Collateral-free credit facility to eligible MSMEs.',
    link: 'https://www.cgtmse.in/'
  }
];

const investors = [
  {
    name: 'Ravi Kumar',
    profile: 'https://linkedin.com/in/ravikumar',
    company: 'NextGen Capital',
    description: 'Invests in early-stage tech startups.'
  },
  {
    name: 'Anjali Sharma',
    profile: 'https://linkedin.com/in/anjalisharma',
    company: 'Women Ventures',
    description: 'Focuses on women-led startups and sustainable ventures.'
  }
];

const Funding = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    idea: '',
    linkedin: '',
    amount: '',
    location: ''
  });

  const [applicants, setApplicants] = useState([
    {
      name: 'Priya Menon',
      email: 'priya.menon@example.com',
      idea: 'AI-driven tutor for rural education',
      linkedin: 'https://linkedin.com/in/priyamenon',
      amount: '500000',
      location: 'Bengaluru, Karnataka'
    },
    {
      name: 'Arjun Desai',
      email: 'arjun.desai@example.com',
      idea: 'Green-tech for sustainable farming',
      linkedin: 'https://linkedin.com/in/arjundesai',
      amount: '800000',
      location: 'Ahmedabad, Gujarat'
    }
  ]);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setApplicants([...applicants, form]);
    setForm({
      name: '',
      email: '',
      idea: '',
      linkedin: '',
      amount: '',
      location: ''
    });
  };

  return (
    <div className="funding-page">
      {/* Hero Section */}
      <section className="fhero-section" data-aos="fade-in">
        <div className="overlay">
          <h1>Funding & Investment Hub</h1>
          <p>Empowering startups with capital and connections</p>
        </div>
      </section>

      {/* Funding Opportunities */}
      <section className="horizontal-section" data-aos="fade-up">
        <h2>Funding Opportunities</h2>
        <div className="card-row">
          

          {fundingOpportunities.map((item, index) => (
            <div className="funding-card" key={index} data-aos="zoom-in-up">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a href={item.link} target="_blank" rel="noreferrer">
                Learn More <FaExternalLinkAlt />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Government Schemes */}
      <section className="horizontal-section alt-bg" data-aos="fade-up">
        <h2>Government Schemes</h2>
        <div className="card-row stagger-animation">
          {governmentSchemes.map((item, index) => (
            <div
              className={`funding-card from-right delay-${index + 1}`}
              key={index}
              data-aos="fade-right"
            >
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a href={item.link} target="_blank" rel="noreferrer">
                Learn More <FaExternalLinkAlt />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Apply for Funding */}
       <section className="horizontal-section" data-aos="fade-right">
  <h2>Apply for Funding</h2>
  <form className="funding-form-grid" onSubmit={handleSubmit}>
    <div className="form-row">
      <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
      <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} required />
    </div>
    <div className="form-row">
      <input type="text" name="linkedin" placeholder="LinkedIn Profile URL" value={form.linkedin} onChange={handleChange} required />
      <input type="text" name="location" placeholder="City / State" value={form.location} onChange={handleChange} required />
    </div>
    <div className="form-row">
      <input type="number" name="amount" placeholder="Funding Amount Needed (in ₹)" value={form.amount} onChange={handleChange} required />
    </div>
    <div className="form-row full-width">
      <textarea name="idea" placeholder="Describe your startup idea" value={form.idea} onChange={handleChange} required />
    </div>
    <button type="submit" className="nav-btn">Submit</button>
  </form>
</section>


      {/* Display Applicants */}
      <section className="horizontal-section alt-bg" data-aos="fade-left">
        <h2>Funding Applicants</h2>
        <div className="applicant-list">
          {applicants.map((applicant, index) => (
            <div className="applicant-card" key={index} data-aos="fade-up">
              <div className="applicant-avatar">{applicant.name.charAt(0)}</div>
              <div className="applicant-info">
                <h4>{applicant.name}</h4>
                <p><strong>Email:</strong> {applicant.email}</p>
                <p><strong>Location:</strong> {applicant.location}</p>
                <p><strong>Amount Needed:</strong> ₹{applicant.amount}</p>
                <p><strong>Idea:</strong> {applicant.idea}</p>
                <a href={applicant.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn <FaLinkedin />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Investors */}
      <section className="horizontal-section" data-aos="zoom-in">
        <h2>Meet Our Investors</h2>
        <div className="card-row">
          {investors.map((investor, index) => (
            <div className="investor-card" key={index} data-aos="flip-up">
              <h3>{investor.name}</h3>
              <p>{investor.company}</p>
              <p>{investor.description}</p>
              <a href={investor.profile} target="_blank" rel="noreferrer">
                LinkedIn <FaLinkedin />
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Funding;
