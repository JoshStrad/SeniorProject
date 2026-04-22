 import React from 'react';
 import NBAPlayerProfile from '../../../components/NBAPlayerProfile';
 import './nets-player.css';
 import playerData from '../../../../scrapeddata/nba/players/jalen-wilson.json';
 
 const  NBAPlayer = () => {
   return (
     <div>
       <NBAPlayerProfile
         data={playerData}
         headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4431714.png&w=350&h=254"
         auraClass="nba-aura"
         teamName="Brooklyn Nets"
         jerseyNumber="22"
         bio=""
       />
     </div>
   );
 };
 
 export default NBAPlayer;