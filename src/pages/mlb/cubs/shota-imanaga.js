import React from 'react';
import MLBPlayerProfile from '../../../components/MLBPlayerProfile';
import pitcherData from '../../../../scrapeddata/mlb/pitchers/shota-imanaga.json';
import './cubs.css';

const MLBPitcher = () => {
  return (
    <MLBPlayerProfile
      data={pitcherData}
      headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/5134630.png&w=350&h=254"
      bio=""
      auraClass="mlb-aura"
      teamName="Chicago Cubs"
      jerseyNumber="18"
    />
  );
};

export default MLBPitcher;