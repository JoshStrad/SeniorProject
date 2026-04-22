 import React from 'react';
 import NBAPlayerProfile from '../../../components/NBAPlayerProfile';
 import './nuggets-player.css';
 import playerData from '../../../../scrapeddata/nba/players/aaron-gordon.json';
 
 const  NBAPlayer = () => {
   return (
     <div>
       <NBAPlayerProfile
         data={playerData}
         headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3064290.png&w=350&h=254"
         auraClass="nba-aura"
         teamName="Denver Nuggets"
         jerseyNumber="32"
         bio=""
       />
     </div>
   );
 };
 
 export default NBAPlayer;