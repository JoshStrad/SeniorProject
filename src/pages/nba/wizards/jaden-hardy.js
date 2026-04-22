 import React from 'react';
 import NBAPlayerProfile from '../../../components/NBAPlayerProfile';
 import './wizards-player.css';
 import playerData from '../../../../scrapeddata/nba/players/jaden-hardy.json';
 
 const  NBAPlayer = () => {
   return (
     <div>
       <NBAPlayerProfile
         data={playerData}
         headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4868423.png&w=350&h=254"
         auraClass="nba-aura"
         teamName="Washington Wizards"
         jerseyNumber="8"
         bio=""
       />
     </div>
   );
 };
 
 export default NBAPlayer;