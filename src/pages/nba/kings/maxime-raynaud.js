 import React from 'react';
 import NBAPlayerProfile from '../../../components/NBAPlayerProfile';
 import './kings-player.css';
 import playerData from '../../../../scrapeddata/nba/players/maxime-raynaud.json';
 
 const  NBAPlayer = () => {
   return (
     <div>
       <NBAPlayerProfile
         data={playerData}
         headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4898371.png&w=350&h=254"
         auraClass="nba-aura"
         teamName="Sacremento Kings"
         jerseyNumber="42"
         bio=""
       />
     </div>
   );
 };
 
 export default NBAPlayer;