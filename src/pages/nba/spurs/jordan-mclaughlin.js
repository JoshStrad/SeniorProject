 import React from 'react';
 import NBAPlayerProfile from '../../../components/NBAPlayerProfile';
 import './spurs-player.css';
 import playerData from '../../../../scrapeddata/nba/players/jordan-mclaughlin.json';
 
 const  NBAPlayer = () => {
   return (
     <div>
       <NBAPlayerProfile
         data={playerData}
         headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3134916.png&w=350&h=254"
         auraClass="nba-aura"
         teamName="San Antonio Spurs"
         jerseyNumber="0"
         bio=""
       />
     </div>
   );
 };
 
 export default NBAPlayer;