import React from 'react';
import MLBPlayerProfile from '../../../components/MLBPlayerProfile';
import pitcherData from '../../../../scrapeddata/mlb/pitchers/robbie-ray.json';
import './giants.css';

const MLBPitcher = () => {
  return (
    <MLBPlayerProfile
      data={pitcherData}
      headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/32175.png&w=350&h=254"
      bio=""
      auraClass="mlb-aura"
      teamName="San Francisco Giants"
      jerseyNumber="38"
    />
  );
};

export default MLBPitcher;