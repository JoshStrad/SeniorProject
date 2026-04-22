import React from 'react';
import Header from '../components/Header'; 
import '../components/Header.css'

const AboutPage = () => {
  return (
    <div>
      <Header />
      <h1>About Us</h1>
      <p>Welcome to GameWinningStats, your source for player stats across NBA, MLB, and NFL.</p>
      <p>Our mission is to provide accurate and up-to-date statistical information for sports fans as well as provide historical stats to add
        for your hottest sports debates.</p>
      <p>Contact us at info@gamewinningstats.com for inquiries and support.</p>
      <p>Player stats scraped from basketball-reference, ESPN, and baseball-reference.</p>
    </div>
  );
};

export default AboutPage;