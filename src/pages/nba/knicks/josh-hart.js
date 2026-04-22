 import React from 'react';
 import NBAPlayerProfile from '../../../components/NBAPlayerProfile';
 import './knicks-player.css';
 import playerData from '../../../../scrapeddata/nba/players/josh-hart.json';
 
 const  NBAPlayer = () => {
   return (
     <div>
       <NBAPlayerProfile
         data={playerData}
         headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3062679.png&w=350&h=254"
         auraClass="nba-aura"
         teamName="New York Knicks"
         jerseyNumber="3"
         bio=""
       />
     </div>
   );
 };
 
 export default NBAPlayer;