import React from 'react';
import NBAPlayerProfile from '../../../components/NBAPlayerProfile';
import './blazers-player.css';
import playerData from '../../../../scrapeddata/nba/players/robert-williams.json';

const NBAPlayer = () => {
  return (
    <div>
      <NBAPlayerProfile
        data={playerData}
        headshot=""
        auraClass="nba-aura"
        teamName="Portland Trailblazers"
        jerseyNumber="8"
        bio=""
      />
    </div>
  );
};

export default NBAPlayer;