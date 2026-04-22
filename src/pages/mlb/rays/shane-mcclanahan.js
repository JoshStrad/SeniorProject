import React from 'react';
import MLBPlayerProfile from '../../../components/MLBPlayerProfile';
import pitcherData from '../../../../scrapeddata/mlb/pitchers/shane-mcclanahan.json';
import './rays.css';

const MLBPitcher = () => {
  return (
    <MLBPlayerProfile
      data={pitcherData}
      headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/41199.png&w=350&h=254"
      bio=""
      auraClass="mlb-aura"
      teamName="Tampa Bay Rays"
      jerseyNumber="18"
    />
  );
};

export default MLBPitcher;