import React from 'react';
import Header from '../../../components/Header';
import './justin-herbert.css'; // Player-specific CSS

const JustinHerbert = () => {
  return (
    <>
      <Header />
      <main className="profile-container chargers-aura">
        <h1>Justin Herbert</h1>
        <p>Number: 10</p>
        <p>Height: 6'6"</p>
        <p>Age: 27</p>
        <p>Position: Quarterback</p>
        <p>College: Oregon</p>
        <p>Drafted: 6th overall in the 2020 NFL Draft by the Los Angeles Chargers</p>

        {/* Player Image */}
        <div className="player-image">
          <img
            src="https://static.www.nfl.com/image/upload/t_headshot_desktop/league/s1oelyaroiaalgilbeqk"
            alt="Justin Herbert"
            className="profile-img"
          />
        </div>

        {/* Player Bio */}
        <div className="bio">
          <h2>Bio</h2>
          <p>
            Justin Herbert is a strong-armed, high-IQ quarterback for the Los Angeles Chargers,
            known for elite velocity, poise under pressure, and accuracy to all levels of the field.
            Since his 2020 debut, he’s become a centerpiece of the Chargers’ offense with
            prolific passing totals and clutch playmaking.
          </p>
        </div>

        {/* Player Stats */}
        <div className="stats">
          <h2>Justin Herbert Stats</h2>
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
              {/* Sample rows — replace with scraped data */}
              <tr>
                <td>2020</td><td>22</td><td>LAC</td><td>NFL</td><td>QB</td>
                <td>15</td><td>15</td><td>396</td><td>595</td><td>66.6</td>
                <td>4,336</td><td>31</td><td>10</td><td>98.3</td>
                <td>32</td><td>7.3</td><td>7.3</td><td>289.1</td>
                <td>55</td><td>234</td><td>5</td><td>OROY</td>
              </tr>
              <tr>
                <td>2021</td><td>23</td><td>LAC</td><td>NFL</td><td>QB</td>
                <td>17</td><td>17</td><td>443</td><td>672</td><td>65.9</td>
                <td>5,014</td><td>38</td><td>15</td><td>97.7</td>
                <td>31</td><td>7.5</td><td>7.7</td><td>295.0</td>
                <td>63</td><td>302</td><td>3</td><td>PB</td>
              </tr>
              <tr>
                <td>2022</td><td>24</td><td>LAC</td><td>NFL</td><td>QB</td>
                <td>17</td><td>17</td><td>477</td><td>699</td><td>68.2</td>
                <td>4,739</td><td>25</td><td>10</td><td>93.2</td>
                <td>38</td><td>6.8</td><td>6.8</td><td>278.8</td>
                <td>54</td><td>147</td><td>0</td><td>PB, AP MVP-9</td>
              </tr>
              <tr>
                <td>2023</td><td>25</td><td>LAC</td><td>NFL</td><td>QB</td>
                <td>13</td><td>13</td><td>297</td><td>456</td><td>65.1</td>
                <td>3,134</td><td>20</td><td>7</td><td>93.2</td>
                <td>29</td><td>6.9</td><td>6.8</td><td>241.1</td>
                <td>54</td><td>223</td><td>3</td><td></td>
              </tr>
              <tr>
                <td>2024</td><td>26</td><td>LAC</td><td>NFL</td><td>QB</td>
                <td>17</td><td>17</td><td>332</td><td>504</td><td>65.9</td>
                <td>3,870</td><td>23</td><td>3</td><td>101.7</td>
                <td>38</td><td>7.7</td><td>6.8</td><td>227.6</td>
                <td>69</td><td>306</td><td>0</td><td>PB</td>
              </tr>
              <tr>
                <td>2025</td><td>27</td><td>LAC</td><td>NFL</td><td>QB</td>
                <td>8</td><td>8</td><td>201</td><td>296</td><td>67.9</td>
                <td>2,140</td><td>16</td><td>7</td><td>97.0</td>
                <td>38</td><td>6.8</td><td>6.8</td><td>267.5</td>
                <td>37</td><td>248</td><td>0</td><td></td>
              </tr>
              {/* Add more seasons (2023, 2024, etc.) as you scrape them */}
            </tbody>
          </table>
          <p className="stats-note">
            Note: 
          </p>
        </div>

        {/* Highlight video (YouTube) */}
        <div className="highlight-video">
          <iframe
            width="560"
            height="315"
            src=""
            title="Justin Herbert Highlights"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </main>
    </>
  );
};

export default JustinHerbert;
