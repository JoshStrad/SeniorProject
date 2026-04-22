 import React from 'react';
 import NBAPlayerProfile from '../../../components/NBAPlayerProfile';
 import './raptors-player.css';
 import playerData from '../../../../scrapeddata/nba/players/rj-barrett.json';
 
 const  NBAPlayer = () => {
   return (
     <div>
       <NBAPlayerProfile
         data={playerData}
         headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4395625.png&w=350&h=254"
         auraClass="nba-aura"
         teamName="Toronto Raptors"
         jerseyNumber="9"
         bio=""
       />
     </div>
   );
 };
 
 export default NBAPlayer;