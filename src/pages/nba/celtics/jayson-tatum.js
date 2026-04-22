import React from 'react';
import NBAPlayerProfile from '../../../components/NBAPlayerProfile';
import './celtics-player.css';
import playerData from '../../../../scrapeddata/nba/players/jayson-tatum.json';

const NBAPlayer = () => {
  return (
    <div>
      <NBAPlayerProfile
        data={playerData}
        headshot="https://cdn.nba.com/headshots/nba/latest/1040x760/1628369.png"
        auraClass="nba-aura"
        teamName="Boston Celtics"
        jerseyNumber="0"
        bio="Jayson Tatum is a dynamic and versatile forward for the Boston Celtics, known for his exceptional scoring ability, athleticism, and leadership on the court. Since being drafted in 2017, he has become one of the NBA’s brightest stars, consistently averaging over 20 points per game and earning multiple All-Star selections."
      />
    </div>
  );
};

export default NBAPlayer;