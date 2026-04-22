 import React from 'react';
 import NBAPlayerProfile from '../../../components/NBAPlayerProfile';
 import './spurs-player.css';
 import playerData from '../../../../scrapeddata/nba/players/luke-kornet.json';
 
 const  NBAPlayer = () => {
   return (
     <div>
       <NBAPlayerProfile
         data={playerData}
         headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3064560.png&w=350&h=254"
         auraClass="nba-aura"
         teamName="San Antonio Spurs"
         jerseyNumber="7"
         bio=""
       />
     </div>
   );
 };
 
 export default NBAPlayer;