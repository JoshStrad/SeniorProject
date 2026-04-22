 import React from 'react';
 import NBAPlayerProfile from '../../../components/NBAPlayerProfile';
 import './knicks-player.css';
 import playerData from '../../../../scrapeddata/nba/players/jose-alvarado.json';
 
 const  NBAPlayer = () => {
   return (
     <div>
       <NBAPlayerProfile
         data={playerData}
         headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4277869.png&w=350&h=254"
         auraClass="nba-aura"
         teamName="New York Knicks"
         jerseyNumber="5"
         bio=""
       />
     </div>
   );
 };
 
 export default NBAPlayer;