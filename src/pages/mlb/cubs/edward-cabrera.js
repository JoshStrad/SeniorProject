import React from 'react';
import MLBPlayerProfile from '../../../components/MLBPlayerProfile';
import pitcherData from '../../../../scrapeddata/mlb/pitchers/edwar-cabrera.json';
import './cubs.css';

const MLBPitcher = () => {
  return (
    <MLBPlayerProfile
      data={pitcherData}
      headshot=""
      bio=""
      auraClass="mlb-aura"
      teamName="Chicago Cubs"
      jerseyNumber="30"
    />
  );
};

export default MLBPitcher;