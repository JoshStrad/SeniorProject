 import React from 'react';
 import NBAPlayerProfile from '../../../components/NBAPlayerProfile';
 import './rockets-player.css';
 import playerData from '../../../../scrapeddata/nba/players/dorian-finney-smith.json';
 
 const  NBAPlayer = () => {
   return (
     <div>
       <NBAPlayerProfile
         data={playerData}
         headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2578185.png&w=350&h=254"
         auraClass="nba-aura"
         teamName="Houston Rcokets"
         jerseyNumber="2"
         bio=""
       />
     </div>
   );
 };
 
 export default NBAPlayer;