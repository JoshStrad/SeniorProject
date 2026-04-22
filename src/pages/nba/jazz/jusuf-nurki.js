 import React from 'react';
 import NBAPlayerProfile from '../../../components/NBAPlayerProfile';
 import './jazz-player.css';
 import playerData from '../../../../scrapeddata/nba/players/jusuf-nurki.json';
 
 const  NBAPlayer = () => {
   return (
     <div>
       <NBAPlayerProfile
         data={playerData}
         headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3102530.png&w=350&h=254"
         auraClass="nba-aura"
         teamName="Utah Jazz"
         jerseyNumber="30"
         bio=""
       />
     </div>
   );
 };
 
 export default NBAPlayer;