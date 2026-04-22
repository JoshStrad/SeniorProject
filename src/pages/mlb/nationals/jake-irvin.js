import React from 'react';
import MLBPlayerProfile from '../../../components/MLBPlayerProfile';
import pitcherData from '../../../../scrapeddata/mlb/pitchers/jake-irvin.json';
import './nationals.css';

const MLBPitcher = () => {
  return (
    <MLBPlayerProfile
      data={pitcherData}
      headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/41290.png&w=350&h=254"
      bio=""
      auraClass="mlb-aura"
      teamName="Washington Nationals"
      jerseyNumber="27"
    />
  );
};

export default MLBPitcher;