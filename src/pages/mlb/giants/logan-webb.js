import React from 'react';
import MLBPlayerProfile from '../../../components/MLBPlayerProfile';
import pitcherData from '../../../../scrapeddata/mlb/pitchers/logan-webb.json';
import './giants.css';

const MLBPitcher = () => {
  return (
    <MLBPlayerProfile
      data={pitcherData}
      headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/41216.png&w=350&h=254"
      bio=""
      auraClass="mlb-aura"
      teamName="San Francisco Giants"
      jerseyNumber="62"
    />
  );
};

export default MLBPitcher;