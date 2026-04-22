import React from 'react';
import MLBPlayerProfile from '../../../components/MLBPlayerProfile';
import pitcherData from '../../../../scrapeddata/mlb/pitchers/chase-burns.json';
import './reds.css';

const MLBPitcher = () => {
  return (
    <MLBPlayerProfile
      data={pitcherData}
      headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/4927516.png&w=350&h=254"
      bio=""
      auraClass="mlb-aura"
      teamName="Cincinnati Reds"
      jerseyNumber="26"
    />
  );
};

export default MLBPitcher;