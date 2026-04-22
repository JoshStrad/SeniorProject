import React from "react";
import "./Leaderboard.css";

const Leaderboard = () => {
  return (
    <section className="stats-leaders aura-bg">
      <h2 className="aura-title">Stats Leaders</h2>

      <div className="leaders-grid">
        {/* NFL Leaders */}
        <div className="leader-card aura-card">
          <h3>NFL Passing Yards (2026)</h3>
          <ul>
            <li><a href="/nfl/rams/matthew-stafford">Matthew Stafford — 4,707</a></li>
            <li><a href="/nfl/lions/jared-goff">Jared Goff — 4,564</a></li>
            <li><a href="/nfl/cowboys/dak-prescott">Dak Prescott — 4,552</a></li>
          </ul>
        </div>

        {/* NBA Leaders */}
        <div className="leader-card aura-card">
          <h3>NBA PPG (2025–26)</h3>
          <ul>
            <li><a href="/nba/lakers/luka-don-i">Luka Dončić — 33.5</a></li>
            <li><a href="/nba/thunder/shai-gilgeous-alexander">Shai Gilgeous-Alexander — 31.5</a></li>
            <li><a href="/nba/timberwolves/anthony-edwards">Anthony Edwards— 30.8</a></li>
          </ul>
        </div>

        {/* MLB Leaders */}
        <div className="leader-card aura-card">
          <h3>MLB ERA Leaders (2025)</h3>
          <ul>
            <li><a href="/mlb/pirates/paul-skenes">Paul Skenes — 1.97</a></li>
            <li><a href="/mlb/tigers/tarik-skubal">Tarik Skubal — 2.21</a></li>
            <li><a href="/mlb/astros/hunter-brown">Hunter Brown — 2.43</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Leaderboard;
