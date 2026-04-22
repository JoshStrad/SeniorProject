import React from 'react';
import MLBPlayerProfile from '../../../components/MLBPlayerProfile';
import pitcherData from '../../../../scrapeddata/mlb/pitchers/kyle-harrison.json';
import './brewers.css';

const MLBPitcher = () => {
  return (
    <MLBPlayerProfile
      data={pitcherData}
      headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/4683375.png&w=350&h=254"
      bio=""
      auraClass="mlb-aura"
      teamName="Milwaukee Brewers"
      jerseyNumber="52"
    />
  );
};

export default MLBPitcher;