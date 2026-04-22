 import React from 'react';
 import NBAPlayerProfile from '../../../components/NBAPlayerProfile';
 import './nets-player.css';
 import playerData from '../../../../scrapeddata/nba/players/nolan-traor.json';
 
 const  NBAPlayer = () => {
   return (
     <div>
       <NBAPlayerProfile
         data={playerData}
         headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/5279130.png&w=350&h=254"
         auraClass="nba-aura"
         teamName="Brooklyn Nets"
         jerseyNumber="88"
         bio=""
       />
     </div>
   );
 };
 
 export default NBAPlayer;