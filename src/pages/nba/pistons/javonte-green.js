 import React from 'react';
 import NBAPlayerProfile from '../../../components/NBAPlayerProfile';
 import './pistons-player.css';
 import playerData from '../../../../scrapeddata/nba/players/javonte-green.json';
 
 const  NBAPlayer = () => {
   return (
     <div>
       <NBAPlayerProfile
         data={playerData}
         headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2596112.png&w=350&h=254"
         auraClass="nba-aura"
         teamName="Detroit Pistons"
         jerseyNumber="31"
         bio=""
       />
     </div>
   );
 };
 
 export default NBAPlayer;