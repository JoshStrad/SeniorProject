 import React from 'react';
 import NBAPlayerProfile from '../../../components/NBAPlayerProfile';
 import './wolves-player.css';
 import playerData from '../../../../scrapeddata/nba/players/bones-hyland.json';
 
 const  NBAPlayer = () => {
   return (
     <div>
       <NBAPlayerProfile
         data={playerData}
         headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4592492.png&w=350&h=254"
         auraClass="nba-aura"
         teamName="Minnesota Timberwolves"
         jerseyNumber="8"
         bio=""
       />
     </div>
   );
 };
 
 export default NBAPlayer;