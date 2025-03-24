import React from 'react';
import './HeroSection.css';
import heroImage from '../assets/testBG.jpg';

const HeroSection = () => {
  return (
    <section className="hero-section" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="hero-content text-white text-center">
        <h1 className="display-4">SON TUNG</h1>
        <p className="lead">Actor</p>
      </div>
    </section>
  );
};

export default HeroSection;
