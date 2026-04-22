import React from 'react';
import MLBPlayerProfile from '../../../components/MLBPlayerProfile';
import pitcherData from '../../../../scrapeddata/mlb/pitchers/eduardo-rodr-guez.json';
import './diamondbacks.css';

const MLBPitcher = () => {
  return (
    <MLBPlayerProfile
      data={pitcherData}
      headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/32675.png&w=350&h=254"
      bio=""
      auraClass="mlb-aura"
      teamName="Arizona Diamondbacks"
      jerseyNumber="57"
    />
  );
};

export default MLBPitcher;