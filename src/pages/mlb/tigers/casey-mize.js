import React from 'react';
import MLBPlayerProfile from '../../../components/MLBPlayerProfile';
import pitcherData from '../../../../scrapeddata/mlb/pitchers/casey-mize.json';
import './tigers.css';

const MLBPitcher = () => {
  return (
    <MLBPlayerProfile
      data={pitcherData}
      headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/41167.png&w=350&h=254"
      bio=""
      auraClass="mlb-aura"
      teamName="Detroit Tigers"
      jerseyNumber="12"
    />
  );
};

export default MLBPitcher;