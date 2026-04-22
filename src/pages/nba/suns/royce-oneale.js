  import React from 'react';
  import NBAPlayerProfile from '../../../components/NBAPlayerProfile';
  import './suns-player.css';
  import playerData from '../../../../scrapeddata/nba/players/royce-o-neale.json';
  
  const  NBAPlayer = () => {
    return (
      <div>
        <NBAPlayerProfile
          data={playerData}
          headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2583632.png&w=350&h=254"
          auraClass="nba-aura"
          teamName="Phoenix Suns"
          jerseyNumber="00"
          bio=""
        />
      </div>
    );
  };
  
  export default NBAPlayer;