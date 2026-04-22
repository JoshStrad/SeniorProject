 import React from 'react';
 import NBAPlayerProfile from '../../../components/NBAPlayerProfile';
 import './knicks-player.css';
 import playerData from '../../../../scrapeddata/nba/players/tyler-kolek.json';
 
 const  NBAPlayer = () => {
   return (
     <div>
       <NBAPlayerProfile
         data={playerData}
         headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4433225.png&w=350&h=254"
         auraClass="nba-aura"
         teamName="New York Knicks"
         jerseyNumber="0"
         bio=""
       />
     </div>
   );
 };
 
 export default NBAPlayer;