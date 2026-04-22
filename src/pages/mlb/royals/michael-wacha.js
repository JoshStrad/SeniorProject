import React from 'react';
import MLBPlayerProfile from '../../../components/MLBPlayerProfile';
import pitcherData from '../../../../scrapeddata/mlb/pitchers/michael-wacha.json';
import './royals.css';

const MLBPitcher = () => {
  return (
    <MLBPlayerProfile
      data={pitcherData}
      headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/32640.png&w=350&h=254"
      bio=""
      auraClass="mlb-aura"
      teamName="Kansas City Royals"
      jerseyNumber="52"
    />
  );
};

export default MLBPitcher;