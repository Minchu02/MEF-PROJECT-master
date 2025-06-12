// src/pages/Home.js
import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import TrendingStartups from '../components/TrendingStartups';
import SuccessStories from '../components/SuccessStories';
import HowItWorks from '../components/HowItWorks';
import JoinCTA from '../components/JoinCTA';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      
      <HeroSection />
      <AboutSection />
      <TrendingStartups />
      <SuccessStories />
      <HowItWorks />
      <JoinCTA />
      <Footer />
    </>
  );
};

export default Home;
