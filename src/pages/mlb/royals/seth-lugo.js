import React from 'react';
import MLBPlayerProfile from '../../../components/MLBPlayerProfile';
import pitcherData from '../../../../scrapeddata/mlb/pitchers/seth-lugo.json';
import './royals.css';

const MLBPitcher = () => {
  return (
    <MLBPlayerProfile
      data={pitcherData}
      headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/34873.png&w=350&h=254"
      bio=""
      auraClass="mlb-aura"
      teamName="Kansas City Royals"
      jerseyNumber="67"
    />
  );
};

export default MLBPitcher;