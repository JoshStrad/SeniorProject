import React from 'react';
import MLBPlayerProfile from '../../../components/MLBPlayerProfile';
import pitcherData from '../../../../scrapeddata/mlb/pitchers/brandon-woodruff.json';
import './brewers.css';

const MLBPitcher = () => {
  return (
    <MLBPlayerProfile
      data={pitcherData}
      headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/37515.png&w=350&h=254"
      bio=""
      auraClass="mlb-aura"
      teamName="Milwaukee Brewers"
      jerseyNumber="53"
    />
  );
};

export default MLBPitcher;