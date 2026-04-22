import React from 'react';
import MLBPlayerProfile from '../../../components/MLBPlayerProfile';
import pitcherData from '../../../../scrapeddata/mlb/pitchers/jeffrey-springs.json';
import './athletics.css';

const MLBPitcher = () => {
  return (
    <MLBPlayerProfile
      data={pitcherData}
      headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/35397.png&w=350&h=254"
      bio=""
      auraClass="mlb-aura"
      teamName="Athletics"
      jerseyNumber="59"
    />
  );
};

export default MLBPitcher;