 import React from 'react';
 import NBAPlayerProfile from '../../../components/NBAPlayerProfile';
 import './magic-player.css';
 import playerData from '../../../../scrapeddata/nba/players/desmond-bane.json';
 
 const  NBAPlayer = () => {
   return (
     <div>
       <NBAPlayerProfile
         data={playerData}
         headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4066320.png&w=350&h=254"
         auraClass="nba-aura"
         teamName="Orlando Magic"
         jerseyNumber="3"
         bio=""
       />
     </div>
   );
 };
 
 export default NBAPlayer;