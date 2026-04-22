 import React from 'react';
 import NBAPlayerProfile from '../../../components/NBAPlayerProfile';
 import './spurs-player.css';
 import playerData from '../../../../scrapeddata/nba/players/keldon-johnson.json';
 
 const  NBAPlayer = () => {
   return (
     <div>
       <NBAPlayerProfile
         data={playerData}
         headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4395723.png&w=350&h=254"
         auraClass="nba-aura"
         teamName="San Antonio Spurs"
         jerseyNumber="3"
         bio=""
       />
     </div>
   );
 };
 
 export default NBAPlayer;