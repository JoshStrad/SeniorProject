import React from 'react';
import MLBPlayerProfile from '../../../components/MLBPlayerProfile';
import pitcherData from '../../../../scrapeddata/mlb/pitchers/shane-bieber.json';
import './bluejays.css';

const MLBPitcher = () => {
  return (
    <MLBPlayerProfile
      data={pitcherData}
      headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/40912.png&w=350&h=254"
      bio=""
      auraClass="mlb-aura"
      teamName="Toronto Bluejays"
      jerseyNumber="57"
    />
  );
};

export default MLBPitcher;