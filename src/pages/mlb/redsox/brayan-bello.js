import React from 'react';
import MLBPlayerProfile from '../../../components/MLBPlayerProfile';
import pitcherData from '../../../../scrapeddata/mlb/pitchers/brayan-bello.json';
import './redsox.css';

const MLBPitcher = () => {
  return (
    <MLBPlayerProfile
      data={pitcherData}
      headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/4720856.png&w=350&h=254"
      bio=""
      auraClass="mlb-aura"
      teamName="Boston Redsox"
      jerseyNumber="66"
    />
  );
};

export default MLBPitcher;