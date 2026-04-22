import React from 'react';
import MLBPlayerProfile from '../../../components/MLBPlayerProfile';
import pitcherData from '../../../../scrapeddata/mlb/pitchers/anthony-kay.json';
import './whitesox.css';

const MLBPitcher = () => {
  return (
    <MLBPlayerProfile
      data={pitcherData}
      headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/40947.png&w=350&h=254"
      bio=""
      auraClass="mlb-aura"
      teamName="Chicago White Sox"
      jerseyNumber="18"
    />
  );
};

export default MLBPitcher;