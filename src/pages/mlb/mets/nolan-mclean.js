import React from 'react';
import MLBPlayerProfile from '../../../components/MLBPlayerProfile';
import pitcherData from '../../../../scrapeddata/mlb/pitchers/nolan-mclean.json';
import './mets.css';

const MLBPitcher = () => {
  return (
    <MLBPlayerProfile
      data={pitcherData}
      headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/4433874.png&w=350&h=254"
      bio=""
      auraClass="mlb-aura"
      teamName="New York Mets"
      jerseyNumber="26"
    />
  );
};

export default MLBPitcher;