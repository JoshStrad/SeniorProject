import React from 'react';
import MLBPlayerProfile from '../../../components/MLBPlayerProfile';
import pitcherData from '../../../../scrapeddata/mlb/pitchers/grayson-rodriguez.json';
import './angels.css';

const MLBPitcher = () => {
  return (
    <MLBPlayerProfile
      data={pitcherData}
      headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/41196.png&w=350&h=254"
      bio=""
      auraClass="mlb-aura"
      teamName="Los Angeles Angels"
      jerseyNumber="21"
    />
  );
};

export default MLBPitcher;