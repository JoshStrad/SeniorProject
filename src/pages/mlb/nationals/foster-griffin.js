import React from 'react';
import MLBPlayerProfile from '../../../components/MLBPlayerProfile';
import pitcherData from '../../../../scrapeddata/mlb/pitchers/foster-griffin.json';
import './nationals.css';

const MLBPitcher = () => {
  return (
    <MLBPlayerProfile
      data={pitcherData}
      headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/33773.png&w=350&h=254"
      bio=""
      auraClass="mlb-aura"
      teamName="Washington Nationals"
      jerseyNumber="22"
    />
  );
};

export default MLBPitcher;