import React from 'react';
import MLBPlayerProfile from '../../../components/MLBPlayerProfile';
import pitcherData from '../../../../scrapeddata/mlb/pitchers/sandy-alcantara.json';
import './marlins.css';

const MLBPitcher = () => {
  return (
    <MLBPlayerProfile
      data={pitcherData}
      headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/35241.png&w=350&h=254"
      bio=""
      auraClass="mlb-aura"
      teamName="Miami Marlins"
      jerseyNumber="22"
    />
  );
};

export default MLBPitcher;