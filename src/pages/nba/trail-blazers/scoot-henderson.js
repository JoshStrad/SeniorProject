import React from 'react';
import NBAPlayerProfile from '../../../components/NBAPlayerProfile';
import './blazers-player.css';
import playerData from '../../../../scrapeddata/nba/players/scoot-henderson.json';

const NBAPlayer = () => {
  return (
    <div>
      <NBAPlayerProfile
        data={playerData}
        headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4683678.png&w=350&h=254"
        auraClass="nba-aura"
        teamName="Portland Trailblazers"
        jerseyNumber="00"
        bio=""
      />
    </div>
  );
};

export default NBAPlayer;