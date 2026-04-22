import React from 'react';
import MLBPlayerProfile from '../../../components/MLBPlayerProfile';
import pitcherData from '../../../../scrapeddata/mlb/pitchers/tyler-glasnow.json';
import './dodgers.css';

const MLBPitcher = () => {
  return (
    <MLBPlayerProfile
      data={pitcherData}
      headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/33190.png&w=350&h=254"
      bio=""
      auraClass="mlb-aura"
      teamName="Los Angeles Dodgers"
      jerseyNumber="31"
    />
  );
};

export default MLBPitcher;