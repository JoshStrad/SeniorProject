import React from 'react';
import MLBPlayerProfile from '../../../components/MLBPlayerProfile';
import pitcherData from '../../../../scrapeddata/mlb/pitchers/jose-quintana.json';
import './rockies.css';

const MLBPitcher = () => {
  return (
    <MLBPlayerProfile
      data={pitcherData}
      headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/32106.png&w=350&h=254"
      bio=""
      auraClass="mlb-aura"
      teamName="Colorado Rockies"
      jerseyNumber="62"
    />
  );
};

export default MLBPitcher;