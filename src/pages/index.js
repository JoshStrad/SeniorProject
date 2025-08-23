import React from 'react';
import { Link } from 'gatsby';
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
        <h1>Discover Player Stats</h1>
        <p>Explore detailed statistics of your favorite players and teams.</p>
        <Link to="/explore-stats">Explore Stats
        </Link>
      </div>
      <div className="featured-section">
        <h2>Featured Players' Stats</h2>
        <FeaturedSlider /> {/* Featured content */}
      </div>
      <Footer /> {/* Footer content */}
    </div>
  );
};

export default HomePage;