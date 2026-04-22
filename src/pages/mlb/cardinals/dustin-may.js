import React from 'react';
import MLBPlayerProfile from '../../../components/MLBPlayerProfile';
import pitcherData from '../../../../scrapeddata/mlb/pitchers/dustin-may.json';
import './cardinals.css';

const MLBPitcher = () => {
  return (
    <MLBPlayerProfile
      data={pitcherData}
      headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/40937.png&w=350&h=254"
      bio=""
      auraClass="mlb-aura"
      teamName="St. Louis Cardinals"
      jerseyNumber="3"
    />
  );
};

export default MLBPitcher;