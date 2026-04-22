  import React from 'react';
  import NBAPlayerProfile from '../../../components/NBAPlayerProfile';
  import './suns-player.css';
  import playerData from '../../../../scrapeddata/nba/players/dillon-brooks.json';
  
  const  NBAPlayer = () => {
    return (
      <div>
        <NBAPlayerProfile
          data={playerData}
          headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3155526.png&w=350&h=254"
          auraClass="nba-aura"
          teamName="Phoenix Suns"
          jerseyNumber="3"
          bio=""
        />
      </div>
    );
  };
  
  export default NBAPlayer;