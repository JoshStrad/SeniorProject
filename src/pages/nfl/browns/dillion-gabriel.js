import React from 'react';
import Header from '../../../components/Header';
import './browns.css'; // Player-specific CSS

const DillonGabriel = () => {
  return (
    <>
      <Header />
      <main className="profile-container bills-aura">
        <h1>Josh Allen</h1>
        <p>Number: 9</p>
        <p>Height: 6'3"</p>
        <p>Age: 29</p>
        <p>Position: Quarterback</p>
        <p>College: LSU</p>
        <p>Drafted: 1st overall in the 2020 NFL Draft by the Cincinnati Bengals</p>

        {/* Player Image */}
        <div className="player-image">
          <img
            src="https://static.clubs.nfl.com/image/upload/t_editorial_landscape_12_desktop/browns/nysfh8eic0r0miuhugyz"
            alt="Joe Burrow"
            className="profile-img"
          />
        </div>

        {/* Bio */}
        <div className="bio">
          <h2>Bio</h2>
          <p>
            Joe Burrow is a one of the last "pure" NFL QBs. His supreme accuracy with elite proccessing likens him to the  
            historic field generals before him like Tom Brady and Joe Montana. Since joining the Bengals, he has transformed into one of the league’s most dynamic players, 
            capable of throing for 400 and being Joe Cool in clutch moments.
          </p>
        </div>

        {/* Player Stats */}
        <div className="stats">
          <h2>Joe Burrows' Stats</h2>
          <table className="stats-table">
            <thead>
              <tr>
                <th>Season</th>
                <th>Age</th>
                <th>Team</th>
                <th>Lg</th>
                <th>Pos</th>
                <th>G</th>
                <th>GS</th>
                <th>Cmp</th>
                <th>Att</th>
                <th>Cmp%</th>
                <th>Yds</th>
                <th>TD</th>
                <th>Int</th>
                <th>Rate</th>
                <th>Sk</th>
                <th>Y/A</th>
                <th>AY/A</th>
                <th>Y/G</th>
                <th>Rush</th>
                <th>RuYds</th>
                <th>RuTD</th>
                <th>Awards</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2018</td><td>22</td><td>BUF</td><td>NFL</td><td>QB</td>
                <td>12</td><td>11</td><td>169</td><td>320</td><td>52.8</td>
                <td>2,074</td><td>10</td><td>12</td><td>67.9</td>
                <td>28</td><td>6.5</td><td>5.7</td><td>172.8</td>
                <td>89</td><td>631</td><td>8</td><td></td>
              </tr>
              <tr>
                <td>2019</td><td>23</td><td>BUF</td><td>NFL</td><td>QB</td>
                <td>16</td><td>16</td><td>271</td><td>461</td><td>58.8</td>
                <td>3,089</td><td>20</td><td>9</td><td>85.3</td>
                <td>38</td><td>6.7</td><td>6.3</td><td>193.1</td>
                <td>109</td><td>510</td><td>9</td><td></td>
              </tr>
              <tr>
                <td>2020</td><td>24</td><td>BUF</td><td>NFL</td><td>QB</td>
                <td>16</td><td>16</td><td>396</td><td>572</td><td>69.2</td>
                <td>4,544</td><td>37</td><td>10</td><td>107.2</td>
                <td>27</td><td>7.9</td><td>8.5</td><td>284.0</td>
                <td>102</td><td>421</td><td>8</td><td>PB,ALLPRO2</td>
              </tr>
              <tr>
                <td>2021</td><td>25</td><td>BUF</td><td>NFL</td><td>QB</td>
                <td>17</td><td>17</td><td>409</td><td>646</td><td>63.3</td>
                <td>4,407</td><td>36</td><td>15</td><td>92.2</td>
                <td>26</td><td>6.8</td><td>7.2</td><td>259.2</td>
                <td>122</td><td>763</td><td>6</td><td>PB</td>
              </tr>
              <tr>
                <td>2022</td><td>26</td><td>BUF</td><td>NFL</td><td>QB</td>
                <td>16</td><td>16</td><td>359</td><td>567</td><td>63.3</td>
                <td>4,283</td><td>35</td><td>14</td><td>96.6</td>
                <td>33</td><td>7.6</td><td>7.7</td><td>267.7</td>
                <td>124</td><td>762</td><td>7</td><td>PB</td>
              </tr>
              <tr>
                <td>2023</td><td>27</td><td>BUF</td><td>NFL</td><td>QB</td>
                <td>17</td><td>17</td><td>385</td><td>579</td><td>66.5</td>
                <td>4,306</td><td>29</td><td>18</td><td>92.2</td>
                <td>24</td><td>7.4</td><td>7.1</td><td>253.3</td>
                <td>111</td><td>524</td><td>15</td><td>PB</td>
              </tr>
              
            </tbody>
          </table>
        </div>

        {/* Highlight video */}
        <div className="highlight-video">
          <iframe
            width="560"
            height="315"
            src=""
            title="Josh Allen Highlights"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </main>
    </>
  );
};

export default DillonGabriel;
