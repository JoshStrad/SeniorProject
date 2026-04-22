import React from 'react';
import MLBPlayerProfile from '../../../components/MLBPlayerProfile';
import pitcherData from '../../../../scrapeddata/mlb/pitchers/janson-junk.json';
import './marlins.css';

const MLBPitcher = () => {
  return (
    <MLBPlayerProfile
      data={pitcherData}
      headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/4881980.png&w=350&h=254"
      bio=""
      auraClass="mlb-aura"
      teamName="Miami Marlins"
      jerseyNumber="26"
    />
  );
};

export default MLBPitcher;