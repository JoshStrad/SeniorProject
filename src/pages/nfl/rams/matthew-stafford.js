import React from 'react';
import Header from '../../../components/Header';
import './rams.css';

const MatthewStafford = () => {
  const seasons = ['2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020','2021','2022','2023','2024','2025'];

  return (
    <>
      <Header />
      <main className="profile-container rams-aura">
        <h1>Matthew Stafford</h1>
        <p>Number: 9</p>
        <p>Height: 6'3"</p>
        <p>Age: 37</p>
        <p>Position: Quarterback</p>
        <p>College: Georgia</p>
        <p>Drafted: 1st overall in the 2009 NFL Draft by the Detroit Lions</p>
        <p>Traded: Los Angeles Rams (2021)</p>

        <div className="player-image">
          <img
            src="https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/12483.png&w=350&h=254"
            alt="Matthew Stafford"
            className="profile-img"
          />
        </div>

        <div className="bio">
          <h2>Bio</h2>
          <p>
            Big-arm pocket passer who thrives on anticipation throws and aggressive windows,
            Stafford brought a title to L.A. and continues to dice up defenses off play-action.
          </p>
        </div>

        <div className="stats">
          <h2>Matthew Stafford Stats</h2>
          <table className="stats-table">
            <thead>
              <tr>
                <th>Season</th><th>Age</th><th>Team</th><th>Lg</th><th>Pos</th>
                <th>G</th><th>GS</th><th>Cmp</th><th>Att</th><th>Cmp%</th>
                <th>Yds</th><th>TD</th><th>Int</th><th>Rate</th>
                <th>Sk</th><th>Y/A</th><th>AY/A</th><th>Y/G</th>
                <th>Rush</th><th>RuYds</th><th>RuTD</th><th>Awards</th>
              </tr>
            </thead>
            <tbody>
              {seasons.map(s => (
                <tr key={s}>
                  <td>{s}</td>
                  <td>—</td>
                  <td>{Number(s) >= 2021 ? 'LAR' : 'DET'}</td>
                  <td>NFL</td><td>QB</td>
                  <td>—</td><td>—</td><td>—</td><td>—</td><td>—</td>
                  <td>—</td><td>—</td><td>—</td><td>—</td>
                  <td>—</td><td>—</td><td>—</td><td>—</td>
                  <td>—</td><td>—</td><td>—</td><td></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="highlight-video">
          <iframe
            src="https://www.youtube.com/embed/4l7oQH8XyK4"
            title="Matthew Stafford Highlights"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </main>
    </>
  );
};

export default MatthewStafford;
