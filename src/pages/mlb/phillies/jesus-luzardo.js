import React from 'react';
import MLBPlayerProfile from '../../../components/MLBPlayerProfile';
import pitcherData from '../../../../scrapeddata/mlb/pitchers/jes-s-luzardo.json';
import './phillies.css';

const MLBPitcher = () => {
  return (
    <MLBPlayerProfile
      data={pitcherData}
      headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/39667.png&w=350&h=254"
      bio=""
      auraClass="mlb-aura"
      teamName="Phiadelphia Phillies"
      jerseyNumber="44"
    />
  );
};

export default MLBPitcher;