import React from 'react';
import Header from '../../../components/Header';
import './cardinals.css';

const KylerMurray = () => {
  const seasons = ['2019','2020','2021','2022','2023','2024','2025'];

  return (
    <>
      <Header />
      <main className="profile-container cardinals-aura">
        <h1>Kyler Murray</h1>
        <p>Number: 1</p>
        <p>Height: 5'10"</p>
        <p>Age: 28</p>
        <p>Position: Quarterback</p>
        <p>College: Oklahoma</p>
        <p>Drafted: 1st overall in the 2019 NFL Draft by the Arizona Cardinals</p>

        <div className="player-image">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkrR3qQK59zU0k0Dx1a0r42-orQldINPUjlQ&s"
            alt="Kyler Murray"
            className="profile-img"
          />
        </div>

        <div className="bio">
          <h2>Bio</h2>
          <p>
            Lightning-quick dual threat with a big arm, Kyler stresses defenses horizontally and vertically,
            thriving in spread looks and off-script situations.
          </p>
        </div>

        <div className="stats">
          <h2>Kyler Murray Stats</h2>
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
                  <td>{s}</td><td>—</td><td>ARI</td><td>NFL</td><td>QB</td>
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
            src="https://www.youtube.com/embed/9k8zK3wTz5E"
            title="Kyler Murray Highlights"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </main>
    </>
  );
};

export default KylerMurray;
