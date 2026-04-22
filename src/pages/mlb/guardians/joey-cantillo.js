import React from 'react';
import MLBPlayerProfile from '../../../components/MLBPlayerProfile';
import pitcherData from '../../../../scrapeddata/mlb/pitchers/joey-cantillo.json';
import './guardians.css';

const MLBPitcher = () => {
  return (
    <MLBPlayerProfile
      data={pitcherData}
      headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/42488.png&w=350&h=254"
      bio=""
      auraClass="mlb-aura"
      teamName="Cleveland Guardians"
      jerseyNumber="54"
    />
  );
};

export default MLBPitcher;