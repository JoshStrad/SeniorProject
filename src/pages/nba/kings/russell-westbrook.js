 import React from 'react';
 import NBAPlayerProfile from '../../../components/NBAPlayerProfile';
 import './kings-player.css';
 import playerData from '../../../../scrapeddata/nba/players/russell-westbrook.json';
 
 const  NBAPlayer = () => {
   return (
     <div>
       <NBAPlayerProfile
         data={playerData}
         headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3468.png&w=350&h=254"
         auraClass="nba-aura"
         teamName="Sacremento Kings"
         jerseyNumber="18"
         bio=""
       />
     </div>
   );
 };
 
 export default NBAPlayer;