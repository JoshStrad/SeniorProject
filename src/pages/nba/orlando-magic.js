import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './celtics.css';

const OrlandoMagic = () => {
  const roster = [
    { name: 'Paolo Banchero', position: 'PF', number: 5, profileLink: '/nba/magic/paolo-banchero' },
    { name: 'Desmond Bane', position: 'SG', number: 3, profileLink: '/nba/magic/desmond-bane' },
    { name: 'Goga Bitadze', position: 'C', number: 35, profileLink: '/nba/magic/goga-bitadze' },
    { name: 'Anthony Black', position: 'G', number: 0, profileLink: '/nba/magic/anthony-black' },
    { name: 'Jamal Cain', position: 'F', number: 8, profileLink: '/nba/magic/jamal-cain' },
    { name: 'Wendell Carter Jr.', position: 'C', number: 34, profileLink: '/nba/magic/wendell-carter-jr' },
    { name: 'Tristan da Silva', position: 'F', number: 23, profileLink: '/nba/magic/tristan-da-silva' },
    { name: 'Jett Howard', position: 'G', number: 13, profileLink: '/nba/magic/jett-howard' },
    { name: 'Jonathan Isaac', position: 'PF', number: 1, profileLink: '/nba/magic/jonathan-isaac' },
    { name: 'Tyus Jones', position: 'PG', number: 21, profileLink: '/nba/magic/tyus-jones' },
    { name: 'Noah Penda', position: 'F', number: 93, profileLink: '/nba/magic/noah-penda' },
    { name: 'Jase Richardson', position: 'G', number: 11, profileLink: '/nba/magic/jase-richardson' },
    { name: 'Orlando Robinson', position: 'C', number: 7, profileLink: '/nba/magic/orlando-robinson' },
    { name: 'Jalen Suggs', position: 'SG', number: 4, profileLink: '/nba/magic/jalen-suggs' },
    { name: 'Franz Wagner', position: 'SF', number: 22, profileLink: '/nba/magic/franz-wagner' },
    { name: 'Moritz Wagner', position: 'C', number: 21, profileLink: '/nba/magic/moritz-wagner' },
  ];

  return (
    <>
      <Header />
      <main className="team-container">
        <h1>Orlando Magic</h1>
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

export default OrlandoMagic;
