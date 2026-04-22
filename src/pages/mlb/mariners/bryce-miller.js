import React from 'react';
import MLBPlayerProfile from '../../../components/MLBPlayerProfile';
import pitcherData from '../../../../scrapeddata/mlb/pitchers/bryce-miller.json';
import './mariners.css';

const MLBPitcher = () => {
  return (
    <MLBPlayerProfile
      data={pitcherData}
      headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/4654313.png&w=350&h=254"
      bio=""
      auraClass="mlb-aura"
      teamName="Seattle Mariners"
      jerseyNumber="50"
    />
  );
};

export default MLBPitcher;