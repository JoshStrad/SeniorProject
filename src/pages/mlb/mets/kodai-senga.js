import React from 'react';
import MLBPlayerProfile from '../../../components/MLBPlayerProfile';
import pitcherData from '../../../../scrapeddata/mlb/pitchers/kodai-senga.json';
import './mets.css';

const MLBPitcher = () => {
  return (
    <MLBPlayerProfile
      data={pitcherData}
      headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/4142421.png&w=350&h=254"
      bio=""
      auraClass="mlb-aura"
      teamName="New York Mets"
      jerseyNumber="34"
    />
  );
};

export default MLBPitcher;