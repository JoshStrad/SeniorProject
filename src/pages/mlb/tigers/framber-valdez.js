import React from 'react';
import MLBPlayerProfile from '../../../components/MLBPlayerProfile';
import pitcherData from '../../../../scrapeddata/mlb/pitchers/framber-valdez.json';
import './tigers.css';

const MLBPitcher = () => {
  return (
    <MLBPlayerProfile
      data={pitcherData}
      headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/36581.png&w=350&h=254"
      bio=""
      auraClass="mlb-aura"
      teamName="Detroit Tigers"
      jerseyNumber="59"
    />
  );
};

export default MLBPitcher;