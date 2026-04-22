import React from 'react';
import MLBPlayerProfile from '../../../components/MLBPlayerProfile';
import pitcherData from '../../../../scrapeddata/mlb/pitchers/mitch-keller.json';
import './pirates.css';

const MLBPitcher = () => {
  return (
    <MLBPlayerProfile
      data={pitcherData}
      headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/33722.png&w=350&h=254"
      bio=""
      auraClass="mlb-aura"
      teamName="Pittsburgh Pirates"
      jerseyNumber="23"
    />
  );
};

export default MLBPitcher;