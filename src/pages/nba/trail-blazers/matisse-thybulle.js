import React from 'react';
import NBAPlayerProfile from '../../../components/NBAPlayerProfile';
import './blazers-player.css';
import playerData from '../../../../scrapeddata/nba/players/matisse-thybulle.json';

const NBAPlayer = () => {
  return (
    <div>
      <NBAPlayerProfile
        data={playerData}
        headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3907498.png&w=350&h=254"
        auraClass="nba-aura"
        teamName="Portland Trailblazers"
        jerseyNumber="4"
        bio=""
      />
    </div>
  );
};

export default NBAPlayer;