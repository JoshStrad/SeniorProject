import React from 'react';
import MLBPlayerProfile from '../../../components/MLBPlayerProfile';
import pitcherData from '../../../../scrapeddata/mlb/pitchers/cristian-javier.json';
import './astros.css';

const MLBPitcher = () => {
  return (
    <MLBPlayerProfile
      data={pitcherData}
      headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/41261.png&w=350&h=254"
      bio=""
      auraClass="mlb-aura"
      teamName="Houston Astros"
      jerseyNumber="53"
    />
  );
};

export default MLBPitcher;