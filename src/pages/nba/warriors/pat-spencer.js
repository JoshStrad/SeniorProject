 import React from 'react';
 import NBAPlayerProfile from '../../../components/NBAPlayerProfile';
 import './warriors-player.css';
 import playerData from '../../../../scrapeddata/nba/players/pat-spencer.json';
 
 const  NBAPlayer = () => {
   return (
     <div>
       <NBAPlayerProfile
         data={playerData}
         headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4592714.png&w=350&h=254"
         auraClass="nba-aura"
         teamName="Golden State Warriors"
         jerseyNumber="61"
         bio=""
       />
     </div>
   );
 };
 
 export default NBAPlayer;