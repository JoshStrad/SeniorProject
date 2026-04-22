import React from 'react';
import MLBPlayerProfile from '../../../components/MLBPlayerProfile';
import pitcherData from '../../../../scrapeddata/mlb/pitchers/blake-snell.json';
import './dodgers.css';

const MLBPitcher = () => {
  return (
    <MLBPlayerProfile
      data={pitcherData}
      headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/33748.png&w=350&h=254"
      bio=""
      auraClass="mlb-aura"
      teamName="Los Angeles Dodgers"
      jerseyNumber="7"
    />
  );
};

export default MLBPitcher;