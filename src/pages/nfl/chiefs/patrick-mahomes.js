import React from 'react';
import Header from '../../../components/Header';
import './patrick-mahomes.css'; // Player-specific CSS

const PatrickMahomes = () => {
  return (
    <>
      <Header />
      <main className="profile-container chiefs-aura">
        <h1>Patrick Mahomes</h1>
        <p>Number: 15</p>
        <p>Height: 6'3"</p>
        <p>Age: 30</p>
        <p>Position: Quarterback</p>
        <p>College: Texas Tech</p>
        <p>Drafted: 10th overall in the 2017 NFL Draft by the Kansas City Chiefs</p>

        {/* Player Image */}
        <div className="player-image">
          <img
            src="https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3139477.png"
            alt="Patrick Mahomes"
            className="profile-img"
          />
        </div>

        {/* Player Bio */}
        <div className="bio">
          <h2>Bio</h2>
          <p>
            Patrick Mahomes is the face of the Kansas City Chiefs and one of the most dynamic quarterbacks
            in NFL history. Known for his elite arm talent, creative playmaking, and championship poise,
            Mahomes has already earned multiple MVP awards and Super Bowl titles before turning 30.
          </p>
        </div>

        {/* Player Stats */}
        <div className="stats">
          <h2>Patrick Mahomes Stats</h2>
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
                <td>2017</td><td>22</td><td>KAN</td><td>NFL</td><td>QB</td>
                <td>1</td><td>1</td><td>22</td><td>35</td><td>62.9</td>
                <td>284</td><td>0</td><td>1</td><td>76.4</td>
                <td>2</td><td>8.1</td><td>4.7</td><td>284.0</td>
                <td>7</td><td>10</td><td>0</td><td></td>
              </tr>
              <tr>
                <td>2018</td><td>23</td><td>KAN</td><td>NFL</td><td>QB</td>
                <td>16</td><td>16</td><td>383</td><td>580</td><td>66.0</td>
                <td>5,097</td><td>50</td><td>12</td><td>113.8</td>
                <td>26</td><td>8.8</td><td>9.6</td><td>318.6</td>
                <td>60</td><td>272</td><td>2</td><td>MVP, AP1, PB</td>
              </tr>
              <tr>
                <td>2019</td><td>24</td><td>KAN</td><td>NFL</td><td>QB</td>
                <td>14</td><td>14</td><td>319</td><td>484</td><td>65.9</td>
                <td>4,031</td><td>26</td><td>5</td><td>105.3</td>
                <td>17</td><td>8.3</td><td>8.9</td><td>288.0</td>
                <td>43</td><td>218</td><td>2</td><td>SB MVP</td>
              </tr>
              <tr>
                <td>2020</td><td>25</td><td>KAN</td><td>NFL</td><td>QB</td>
                <td>15</td><td>15</td><td>390</td><td>588</td><td>66.3</td>
                <td>4,740</td><td>38</td><td>6</td><td>108.2</td>
                <td>22</td><td>8.1</td><td>8.9</td><td>316.0</td>
                <td>62</td><td>308</td><td>2</td><td>PB</td>
              </tr>
              <tr>
                <td>2021</td><td>26</td><td>KAN</td><td>NFL</td><td>QB</td>
                <td>17</td><td>17</td><td>436</td><td>658</td><td>66.3</td>
                <td>4,839</td><td>37</td><td>13</td><td>98.5</td>
                <td>28</td><td>7.4</td><td>7.3</td><td>284.6</td>
                <td>66</td><td>381</td><td>2</td><td>PB</td>
              </tr>
              <tr>
                <td>2022</td><td>27</td><td>KAN</td><td>NFL</td><td>QB</td>
                <td>17</td><td>17</td><td>435</td><td>648</td><td>67.1</td>
                <td>5,250</td><td>41</td><td>12</td><td>105.2</td>
                <td>26</td><td>8.1</td><td>8.5</td><td>308.8</td>
                <td>61</td><td>358</td><td>4</td><td>MVP, SB MVP, AP1</td>
              </tr>
              <tr>
                <td>2023</td><td>28</td><td>KAN</td><td>NFL</td><td>QB</td>
                <td>16</td><td>16</td><td>401</td><td>597</td><td>67.2</td>
                <td>4,183</td><td>27</td><td>14</td><td>92.6</td>
                <td>27</td><td>7.0</td><td>6.8</td><td>261.4</td>
                <td>75</td><td>389</td><td>0</td><td>SB MVP</td>
              </tr>
              <tr>
                <td>2024</td><td>29</td><td>KAN</td><td>NFL</td><td>QB</td>
                <td>17</td><td>17</td><td>425</td><td>628</td><td>67.7</td>
                <td>4,590</td><td>35</td><td>11</td><td>105.0</td>
                <td>28</td><td>7.3</td><td>8.0</td><td>270.0</td>
                <td>68</td><td>355</td><td>3</td><td>PB</td>
              </tr>
              <tr>
                <td>2025</td><td>30</td><td>KAN</td><td>NFL</td><td>QB</td>
                <td>—</td><td>—</td><td>—</td><td>—</td><td>—</td>
                <td>—</td><td>—</td><td>—</td><td>—</td>
                <td>—</td><td>—</td><td>—</td><td>—</td>
                <td>—</td><td>—</td><td>—</td><td></td>
              </tr>
            </tbody>
          </table>
          <p className="stats-note">
            Note: Stats current through the 2024 season (regular season totals).
          </p>
        </div>

        {/* Highlight video */}
        <div className="highlight-video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/C2oHFGh5QdQ"
            title="Patrick Mahomes Highlights"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </main>
    </>
  );
};

export default PatrickMahomes;
