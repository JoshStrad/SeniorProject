import React from 'react';
import MLBPlayerProfile from '../../../components/MLBPlayerProfile';
import pitcherData from '../../../../scrapeddata/mlb/pitchers/andrew-abbott.json';
import './reds.css';

const MLBPitcher = () => {
  return (
    <MLBPlayerProfile
      data={pitcherData}
      headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/4414528.png&w=350&h=254"
      bio=""
      auraClass="mlb-aura"
      teamName="Cincinnati Reds"
      jerseyNumber="41"
    />
  );
};

export default MLBPitcher;