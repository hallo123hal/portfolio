import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Biography from './components/Biography';
import Work from './components/Work';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation in milliseconds
      easing: 'ease-in-out', // Type of easing
      once: false, // Animation should repeat when scrolling back
      mirror: true, // Animate elements while scrolling back
    });
  }, []);
  
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Biography />
      <Work />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;