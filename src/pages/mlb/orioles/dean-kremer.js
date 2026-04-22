import React from 'react';
import MLBPlayerProfile from '../../../components/MLBPlayerProfile';
import pitcherData from '../../../../scrapeddata/mlb/pitchers/dean-kremer.json';
import './orioles.css';

const MLBPitcher = () => {
  return (
    <MLBPlayerProfile
      data={pitcherData}
      headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/38295.png&w=350&h=254"
      bio=""
      auraClass="mlb-aura"
      teamName="Baltimore Orioles"
      jerseyNumber="64"
    />
  );
};

export default MLBPitcher;