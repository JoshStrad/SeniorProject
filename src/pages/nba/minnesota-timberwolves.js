import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './celtics.css';

const MinnesotaTimberwolves = () => {
  const roster = [
    { name: 'Joan Beringer', position: 'C', number: 19, profileLink: '/nba/timberwolves/joan-beringer' },
    { name: 'Jaylen Clark', position: 'G', number: 22, profileLink: '/nba/timberwolves/jaylen-clark' },
    { name: 'Mike Conley', position: 'PG', number: 10, profileLink: '/nba/timberwolves/mike-conley' },
    { name: 'Donte DiVincenzo', position: 'SG', number: 0, profileLink: '/nba/timberwolves/donte-divincenzo' },
    { name: 'Rob Dillingham', position: 'G', number: 4, profileLink: '/nba/timberwolves/rob-dillingham' },
    { name: 'Anthony Edwards', position: 'SG', number: 5, profileLink: '/nba/timberwolves/anthony-edwards' },
    { name: 'Jesse Edwards', position: 'C', number: 14, profileLink: '/nba/timberwolves/jesse-edwards' },
    { name: 'Enrique Freeman', position: 'F', number: 8, profileLink: '/nba/timberwolves/enrique-freeman' },
    { name: 'Rudy Gobert', position: 'C', number: 27, profileLink: '/nba/timberwolves/rudy-gobert' },
    { name: 'Bones Hyland', position: 'PG', number: 77, profileLink: '/nba/timberwolves/bones-hyland' },
    { name: 'Joe Ingles', position: 'SG', number: 7, profileLink: '/nba/timberwolves/joe-ingles' },
    { name: 'Jaden McDaniels', position: 'PF', number: 3, profileLink: '/nba/timberwolves/jaden-mcdaniels' },
    { name: 'Leonard Miller', position: 'F', number: 33, profileLink: '/nba/timberwolves/leonard-miller' },
    { name: 'Tristen Newton', position: 'G', number: 13, profileLink: '/nba/timberwolves/tristen-newton' },
    { name: 'Julius Randle', position: 'PF', number: 30, profileLink: '/nba/timberwolves/julius-randle' },
    { name: 'Naz Reid', position: 'C', number: 11, profileLink: '/nba/timberwolves/naz-reid' },
    { name: 'Terrence Shannon Jr.', position: 'G', number: 0, profileLink: '/nba/timberwolves/terrence-shannon-jr' },
    { name: 'Rocco Zikarsky', position: 'C', number: 44, profileLink: '/nba/timberwolves/rocco-zikarsky' },
  ];

  return (
    <>
      <Header />
      <main className="team-container">
        <h1>Minnesota Timberwolves</h1>
        <h2>Roster</h2>
        <table className="roster-table">
          <thead><tr><th>Number</th><th>Name</th><th>Position</th></tr></thead>
          <tbody>
            {roster.map(p => (
              <tr key={p.name}>
                <td>{p.number ?? '—'}</td>
                <td><a href={p.profileLink}>{p.name}</a></td>
                <td>{p.position}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
      <Footer />
    </>
  );
};

export default MinnesotaTimberwolves;
