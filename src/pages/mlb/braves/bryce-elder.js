import React from 'react';
import MLBPlayerProfile from '../../../components/MLBPlayerProfile';
import pitcherData from '../../../../scrapeddata/mlb/pitchers/bryce-elder.json';
import './braves.css';

const MLBPitcher = () => {
  return (
    <MLBPlayerProfile
      data={pitcherData}
      headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/4301067.png&w=350&h=254"
      bio=""
      auraClass="mlb-aura"
      teamName="Atlanta Braves"
      jerseyNumber="55"
    />
  );
};

export default MLBPitcher;