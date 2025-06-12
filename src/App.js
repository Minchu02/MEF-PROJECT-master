import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import EntrepreneurHub from './pages/EntrepreneurHub';
import Funding from './pages/Funding';
import Events from './pages/Events';
import Mentorship from './pages/Mentorship';
import SuccessStories from './pages/SuccessStories';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/entrepreneur-hub" element={<EntrepreneurHub />} />
          <Route path="/funding" element={<Funding />} />
          <Route path="/events" element={<Events />} />
          <Route path="/mentorship" element={<Mentorship />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/contact" element={<Contact />} />
           <Route path="/login" element={<Login />} />
           <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
