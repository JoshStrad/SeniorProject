import React from 'react';
import MLBPlayerProfile from '../../../components/MLBPlayerProfile';
import pitcherData from '../../../../scrapeddata/mlb/pitchers/joe-ryan.json';
import './twins.css';

const MLBPitcher = () => {
  return (
    <MLBPlayerProfile
      data={pitcherData}
      headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/42450.png&w=350&h=254"
      bio=""
      auraClass="mlb-aura"
      teamName="Minnesota Twins"
      jerseyNumber="41"
    />
  );
};

export default MLBPitcher;