import React from 'react';
import MLBPlayerProfile from '../../../components/MLBPlayerProfile';
import pitcherData from '../../../../scrapeddata/mlb/pitchers/cam-schlittler.json';
import './yankees.css';

const MLBPitcher = () => {
  return (
    <MLBPlayerProfile
      data={pitcherData}
      headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/5134581.png&w=350&h=254"
      bio=""
      auraClass="mlb-aura"
      teamName="New York Yankees"
      jerseyNumber="31"
    />
  );
};

export default MLBPitcher;