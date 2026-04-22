import React from 'react';
import MLBPlayerProfile from '../../../components/MLBPlayerProfile';
import pitcherData from '../../../../scrapeddata/mlb/pitchers/hunter-brown.json';
import './astros.css';

const MLBPitcher = () => {
  return (
    <MLBPlayerProfile
      data={pitcherData}
      headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/4717803.png&w=350&h=254"
      bio=""
      auraClass="mlb-aura"
      teamName="Houston Astros"
      jerseyNumber="58"
    />
  );
};

export default MLBPitcher;