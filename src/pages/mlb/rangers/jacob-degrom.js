import React from 'react';
import MLBPlayerProfile from '../../../components/MLBPlayerProfile';
import pitcherData from '../../../../scrapeddata/mlb/pitchers/jacob-degrom.json';
import './rangers.css';

const MLBPitcher = () => {
  return (
    <MLBPlayerProfile
      data={pitcherData}
      headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/32796.png&w=350&h=254"
      bio=""
      auraClass="mlb-aura"
      teamName="Texas Rangers"
      jerseyNumber="48"
    />
  );
};

export default MLBPitcher;