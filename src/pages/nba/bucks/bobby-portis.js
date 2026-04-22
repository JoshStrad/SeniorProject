import React from 'react';
import NBAPlayerProfile from '../../../components/NBAPlayerProfile';
import './bucks-player.css';
import playerData from '../../../../scrapeddata/nba/players/bobby-portis.json';

const NBAPlayer = () => {
  return (
    <div>
      <NBAPlayerProfile
        data={playerData}
        headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3064482.png&w=350&h=254"
        auraClass="nba-team-aura"
        teamName="Milwaukee Bucks"
        jerseyNumber="9"
        bio=""
      />
    </div>
  );
};

export default NBAPlayer;