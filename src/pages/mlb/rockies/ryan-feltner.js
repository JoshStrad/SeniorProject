import React from 'react';
import MLBPlayerProfile from '../../../components/MLBPlayerProfile';
import pitcherData from '../../../../scrapeddata/mlb/pitchers/kyle-freeland.json';
import './rockies.css';

const MLBPitcher = () => {
  return (
    <MLBPlayerProfile
      data={pitcherData}
      headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/4019484.png&w=350&h=254"
      bio=""
      auraClass="mlb-aura"
      teamName="Colorado Rockies"
      jerseyNumber="18"
    />
  );
};

export default MLBPitcher;