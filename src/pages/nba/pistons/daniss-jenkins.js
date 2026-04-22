 import React from 'react';
 import NBAPlayerProfile from '../../../components/NBAPlayerProfile';
 import './pistons-player.css';
 import playerData from '../../../../scrapeddata/nba/players/daniss-jenkins.json';
 
 const  NBAPlayer = () => {
   return (
     <div>
       <NBAPlayerProfile
         data={playerData}
         headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/5107199.png&w=350&h=254"
         auraClass="nba-aura"
         teamName="Detroit Pistons"
         jerseyNumber="24"
         bio=""
       />
     </div>
   );
 };
 
 export default NBAPlayer;