import React from 'react';
import MLBPlayerProfile from '../../../components/MLBPlayerProfile';
import pitcherData from '../../../../scrapeddata/mlb/pitchers/randy-v-squez.json';
import './padres.css';

const MLBPitcher = () => {
  return (
    <MLBPlayerProfile
      data={pitcherData}
      headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/4722847.png&w=350&h=254"
      bio=""
      auraClass="mlb-aura"
      teamName="San Diego Pandres"
      jerseyNumber="98"
    />
  );
};

export default MLBPitcher;