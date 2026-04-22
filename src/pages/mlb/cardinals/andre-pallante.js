import React from 'react';
import MLBPlayerProfile from '../../../components/MLBPlayerProfile';
import pitcherData from '../../../../scrapeddata/mlb/pitchers/andre-pallante.json';
import './cardinals.css';

const MLBPitcher = () => {
  return (
    <MLBPlayerProfile
      data={pitcherData}
      headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/4109034.png&w=350&h=254"
      bio=""
      auraClass="mlb-aura"
      teamName="St. Louis Cardinals"
      jerseyNumber="53"
    />
  );
};

export default MLBPitcher;