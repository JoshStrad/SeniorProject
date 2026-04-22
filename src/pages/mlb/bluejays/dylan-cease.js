import React from 'react';
import MLBPlayerProfile from '../../../components/MLBPlayerProfile';
import pitcherData from '../../../../scrapeddata/mlb/pitchers/dylan-cease.json';
import './bluejays.css';

const MLBPitcher = () => {
  return (
    <MLBPlayerProfile
      data={pitcherData}
      headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/34943.png&w=350&h=254"
      bio=""
      auraClass="mlb-aura"
      teamName="Toronto Bluejays"
      jerseyNumber="84"
    />
  );
};

export default MLBPitcher;