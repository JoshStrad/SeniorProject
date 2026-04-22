 import React from 'react';
 import NBAPlayerProfile from '../../../components/NBAPlayerProfile';
 import './wolves-player.css';
 import playerData from '../../../../scrapeddata/nba/players/jaden-mcdaniels.json';
 
 const  NBAPlayer = () => {
   return (
     <div>
       <NBAPlayerProfile
         data={playerData}
         headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4431671.png&w=350&h=254"
         auraClass="nba-aura"
         teamName="Minnesota Timberwolves"
         jerseyNumber="3"
         bio=""
       />
     </div>
   );
 };
 
 export default NBAPlayer;