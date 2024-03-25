import React from 'react';
import Header from '../components/Header'; // Import the Header component
import Footer from '../components/Footer';
import FeaturedSlider from '../components/FeaturedSlider';
import '../components/Header.css'
import './HomePage.css'
import '../styles/global.css'; // Import the global CSS file
import '../components/Footer.css'
import HeroSection from '../components/HeroSection';
import '../components/FeaturedSlider.css'

const HomePage = () => {
  return (
    <div>
      <Header /> {/* Render the Header component */}
      <div className="hero-section">
        <HeroSection />
        <h1>Welcome to GameWinningStats</h1>
        <p>Your source for your favorite player stats across NBA, MLB, and NFL</p>
      </div>
      <div className="featured-section">
        <FeaturedSlider /> {/* Featured content */}
      </div>
      <Footer /> {/* Other sections and content */}
    </div>
  );
};

export default HomePage;