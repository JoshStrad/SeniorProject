 import React from 'react';
 import NBAPlayerProfile from '../../../components/NBAPlayerProfile';
 import './sixers-player.css';
 import playerData from '../../../../scrapeddata/nba/players/tyrese-maxey.json';
 
 const  NBAPlayer = () => {
   return (
     <div>
       <NBAPlayerProfile
         data={playerData}
         headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4431678.png&w=350&h=254"
         auraClass="nba-aura"
         teamName="Philadephia 76ers"
         jerseyNumber="0"
         bio=""
       />
     </div>
   );
 };
 
 export default NBAPlayer;