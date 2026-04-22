import React from 'react';
import MLBPlayerProfile from '../../../components/MLBPlayerProfile';
import pitcherData from '../../../../scrapeddata/mlb/pitchers/slade-cecconi.json';
import './guardians.css';

const MLBPitcher = () => {
  return (
    <MLBPlayerProfile
      data={pitcherData}
      headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/41462.png&w=350&h=254"
      bio=""
      auraClass="mlb-aura"
      teamName="Cleveland Guardians"
      jerseyNumber="44"
    />
  );
};

export default MLBPitcher;