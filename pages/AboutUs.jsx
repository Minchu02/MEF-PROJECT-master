import React, { useEffect, useRef, useState } from 'react';
import './AboutUs.css';
import { FaLinkedin } from 'react-icons/fa';
import c1 from '../assets/c1.jpg';
import c2 from '../assets/c2.jpg';
import c3 from '../assets/c3.jpg';
import c4 from '../assets/c4.jpg';
import c5 from '../assets/c5.jpg';
import c6 from '../assets/c6.jpg';
import c7 from '../assets/c7.jpg';
import c8 from '../assets/c8.jpg';
import c9 from '../assets/c9.jpg';
import c10 from '../assets/c10.jpg';
import c11 from '../assets/c11.jpg';
import c12 from '../assets/c12.jpg';
import c13 from '../assets/c13.jpg';

const councilMembers = [
  { name: 'Dr. Ramsastry Ambarish', role: 'Council Member / Special Invitee', image: c1, linkedin: 'https://www.linkedin.com/in/ramasastry-ambarish-38179363/', bio: 'Dr. Ambarish is an accomplished leader in technology-enabled ventures...' },
  { name: 'Mr. Sam Cherian', role: 'Council Member - Industry', image: c2, linkedin: 'https://www.linkedin.com/in/sam-cherian-17b21518/', bio: 'Mr. Cherian is a seasoned industrialist and entrepreneur...' },
  { name: 'Dr. Shrilaksmi Desiraju', role: 'Council Member - Women Entrepreneurs', image: c3, linkedin: 'https://www.linkedin.com/in/shri-desiraju-probiotic-expert/?originalSubdomain=in', bio: 'Dr. Desiraju is a pioneer in probiotics and biotechnology ventures...' },
  { name: 'Mr. Sudhanva Dhananjaya', role: 'Council Member - Strategy', image: c4, linkedin: 'https://www.linkedin.com/in/sudhanva-dhananjaya-087356/', bio: "A recognized name in startup strategy..." },
  { name: 'Prof. Sanjay Dwivedi', role: 'Council Member-Secretary', image: c5, linkedin: 'https://www.linkedin.com/in/sanjaydwivedi/', bio:'Prof. Dwivedi is a well-respected academic leader...' },
  { name: 'Mr. Bhaskar Kalale', role: 'Council Member - TiE-MYS & Mysore Angel Network', image: c6, linkedin: 'https://www.linkedin.com/in/bhaskarkalale/', bio: 'Mr. Kalale is a strategic angel investor...' },
  { name: 'Ram Kevalur', role: 'Council Member - Website & Database', image: c7, linkedin: 'https://www.linkedin.com/in/ramkevalur/', bio: "Ram is a data and systems specialist..." },
  { name: 'Harsha Kikkeri', role: 'Council Member - Hi-Tech-Under 40', image: c8, linkedin: 'https://www.linkedin.com/in/kikkeri-harish-6715b2130/', bio: 'Harsha is a rising leader in emerging technologies...' },
  { name: 'Dr. Rohini Nagapadma', role: 'Council Member - Education & Impact', image: c9, linkedin: 'https://www.linkedin.com/in/dr-rohini-nagapadma-162b301a5/', bio: 'Dr. Rohini is an academic visionary and social enterprise supporter...' },
  { name: 'Dr. Mahesh Rao', role: 'Council Member - Startup Ecosystem', image: c10, linkedin: 'https://www.linkedin.com/in/mahesh-rao-46a6a/', bio: 'Dr. Rao has been instrumental in developing startup accelerators...' },
  { name: 'Mr. Pavan Ranga', role: 'Council Member - Strategy', image: c11, linkedin: 'https://www.linkedin.com/in/pavan-ranga-24803411/', bio: 'Pavan is a renowned industrial strategist...' },
  { name: 'Mr. Shivshankar', role: 'Council Member - Incubators & Colleges', image: c12, linkedin: 'https://www.linkedin.com/in/shiva-shankar-93b343b/', bio: 'Mr. Shivshankar works closely with universities...' },
  { name: 'Mr. Kantharaj Urs', role: 'Council Member / Special Invitee', image: c13, linkedin: 'https://www.linkedin.com/in/kantharaj-urs-72b0372/', bio: 'Mr. Urs brings extensive experience in policy, governance...' },
];

const AboutUs = () => {
  const [activeMember, setActiveMember] = useState(null);
  const elementsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          } else {
            entry.target.classList.remove('animate-in'); // repeatable
          }
        });
      },
      { threshold: 0.2 }
    );

    elementsRef.current.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => {
      elementsRef.current.forEach(el => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="about-us">
      <section className="about-hero animate-on-scroll" ref={el => elementsRef.current.push(el)}>
        <h1>About Mysuru Entrepreneurship Forum (MEF)</h1>
        <p>
          MEF is an initiative to reignite the entrepreneurial spirit of Mysuru & Kodagu by
          bringing together visionaries, mentors, and changemakers to create a thriving ecosystem.
        </p>
      </section>

      <section className="vision-mission">
        <div className="vm-card animate-on-scroll from-left" ref={el => elementsRef.current.push(el)}>
          <h2>Our Vision</h2>
          <p>
            To facilitate the development of an integrated and sustainable ecosystem of entrepreneurship
            for generating employment and creating social value in Mysuru & Kodagu Regions.
          </p>
        </div>
        <div className="vm-card animate-on-scroll from-right" ref={el => elementsRef.current.push(el)}>
          <h2>Our Mission</h2>
          <p>
            Foster collaboration, guide with mutual support, and be an umbrella organization for the startup ecosystem.
          </p>
        </div>
      </section>

      <section className="council">
        <h2>Council Members</h2>
        <div className="council-grid">
          {councilMembers.map((member, index) => (
            <div
              key={index}
              className={`council-card animate-on-scroll ${index % 3 === 0 ? 'from-left' : index % 3 === 1 ? 'from-bottom' : 'from-right'}`}
              ref={el => elementsRef.current.push(el)}
              onClick={() => setActiveMember(member)}
            >
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <a href={member.linkedin} target="_blank" rel="noreferrer">
                <FaLinkedin className="linkedin-icon" />
              </a>
            </div>
          ))}
        </div>

        {activeMember && (
          <div className="modal" onClick={() => setActiveMember(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-btn" onClick={() => setActiveMember(null)}>×</button>
              <h3>{activeMember.name}</h3>
              <p><strong>{activeMember.role}</strong></p>
              <p>{activeMember.bio}</p>
              <a href={activeMember.linkedin} target="_blank" rel="noreferrer" className="linkedin-link">
                View LinkedIn Profile
              </a>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default AboutUs;
