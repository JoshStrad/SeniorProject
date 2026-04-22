import React from 'react';
import { Link } from 'gatsby';
import Header from '../components/Header'; 
import Footer from '../components/Footer';
import FeaturedSlider from '../components/FeaturedSlider';
import '../components/Header.css'
import './HomePage.css'
import '../styles/global.css'; 
import '../components/Footer.css'
import HeroSection from '../components/HeroSection';
import '../components/FeaturedSlider.css'
import Leaderboard from '../components/Leaderboard';

const HomePage = () => {
  return (
    <div>
      <Header /> {}
      <div className="hero-section">
        <HeroSection />
        <h1>Discover Player Stats</h1>
        <p>Explore detailed statistics of your favorite players and teams.</p>
        <Link to="/explore-stats">Explore Stats
        </Link>
      </div>
      <div className="featured-section">
        <h2>Featured Players' Stats</h2>
        <FeaturedSlider /> {}
      </div>
       <Leaderboard />
      <Footer /> {}
    </div>
  );
};

export default HomePage;