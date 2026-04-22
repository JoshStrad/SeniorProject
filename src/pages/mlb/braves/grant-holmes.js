import React from 'react';
import MLBPlayerProfile from '../../../components/MLBPlayerProfile';
import pitcherData from '../../../../scrapeddata/mlb/pitchers/grant-holmes.json';
import './braves.css';

const MLBPitcher = () => {
  return (
    <MLBPlayerProfile
      data={pitcherData}
      headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/33840.png&w=350&h=254"
      bio=""
      auraClass="mlb-aura"
      teamName="Atlanta Braves"
      jerseyNumber="66"
    />
  );
};

export default MLBPitcher;