 import React from 'react';
 import NBAPlayerProfile from '../../../components/NBAPlayerProfile';
 import './wizards-player.css';
 import playerData from '../../../../scrapeddata/nba/players/trae-young.json';
 
 const  NBAPlayer = () => {
   return (
     <div>
       <NBAPlayerProfile
         data={playerData}
         headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4277905.png&w=350&h=254"
         auraClass="nba-aura"
         teamName="Washington Wizards"
         jerseyNumber="3"
         bio=""
       />
     </div>
   );
 };
 
 export default NBAPlayer;