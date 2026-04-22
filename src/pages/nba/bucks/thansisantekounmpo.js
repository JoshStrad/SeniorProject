import React from 'react';
import NBAPlayerProfile from '../../../components/NBAPlayerProfile';
import './bucks-player.css';
import playerData from '../../../../scrapeddata/nba/players/thanasis-antetokounmpo.json';

const NBAPlayer = () => {
  return (
    <div>
      <NBAPlayerProfile
        data={playerData}
        headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3102533.png&w=350&h=254"
        auraClass="nba-aura"
        teamName="Milwaukee Bucks"
        jerseyNumber="43"
        bio=""
      />
    </div>
  );
};

export default NBAPlayer;