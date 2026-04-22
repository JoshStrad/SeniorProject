import React from 'react';
import MLBPlayerProfile from '../../../components/MLBPlayerProfile';
import pitcherData from '../../../../scrapeddata/mlb/pitchers/noah-cameron.json';
import './royals.css';

const MLBPitcher = () => {
  return (
    <MLBPlayerProfile
      data={pitcherData}
      headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/4417208.png&w=350&h=254"
      bio=""
      auraClass="mlb-aura"
      teamName="Kansas City Royals"
      jerseyNumber="65"
    />
  );
};

export default MLBPitcher;