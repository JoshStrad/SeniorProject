import React from 'react';
import NBAPlayerProfile from '../../../components/NBAPlayerProfile';
import './bucks-player.css';
import playerData from '../../../../scrapeddata/nba/players/jericho-sims.json';

const NBAPlayer = () => {
  return (
    <div>
      <NBAPlayerProfile
        data={playerData}
        headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4277922.png&w=350&h=254"
        auraClass="nba-aura"
        teamName="Milwaukee Bucks"
        jerseyNumber="00"
        bio=""
      />
    </div>
  );
};

export default NBAPlayer;