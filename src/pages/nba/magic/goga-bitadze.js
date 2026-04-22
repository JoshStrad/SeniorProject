 import React from 'react';
 import NBAPlayerProfile from '../../../components/NBAPlayerProfile';
 import './magic-player.css';
 import playerData from '../../../../scrapeddata/nba/players/goga-bitadze.json';
 
 const  NBAPlayer = () => {
   return (
     <div>
       <NBAPlayerProfile
         data={playerData}
         headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4348700.png&w=350&h=254"
         auraClass="nba-aura"
         teamName="Orlando Magic"
         jerseyNumber="35"
         bio=""
       />
     </div>
   );
 };
 
 export default NBAPlayer;