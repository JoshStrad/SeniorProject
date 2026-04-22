import React from 'react';
import MLBPlayerProfile from '../../../components/MLBPlayerProfile';
import pitcherData from '../../../../scrapeddata/mlb/pitchers/luis-castillo.json';
import './mariners.css';

const MLBPitcher = () => {
  return (
    <MLBPlayerProfile
      data={pitcherData}
      headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/35124.png&w=350&h=254"
      bio=""
      auraClass="mlb-aura"
      teamName="Seattle Mariners"
      jerseyNumber="58"
    />
  );
};

export default MLBPitcher;