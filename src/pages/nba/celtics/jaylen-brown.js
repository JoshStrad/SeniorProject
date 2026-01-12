import React from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import './celtics-player.css';

const JaylenBrown = () => {
  return (
    <>
      <Header />
      <main className="profile-container">
        <h1>Jaylen Brown</h1>
        <p>Number: 7</p>
        <p>Height: 6'6"</p>
        <p>Age: 27</p>
        <p>Position: Small Foward</p>
        <p>College: California</p>
        <p>Drafted: 3rd overall in the 2016 NBA Draft by the Boston Celtics</p>

        {/* Player Image */}
        <div className="player-image">
          <img 
            src="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3917376.png&w=350&h=254" 
            alt="Jaylen Brown" 
            className="profile-img" 
          />
        </div>

        {/* Player Bio */}
        <div className="bio">
          <h2>Bio</h2>
          <p>Jaylen Brown is a versatile forward known for his scoring ability, athleticism, and strong defensive skills. 
            Since joining the Boston Celtics, he has developed into one of the team's key players, contributing as both a scorer and a defender. 
            Brown has established himself as a two-way player, with standout performances in both the regular season and playoffs. 
            His work ethic and leadership on and off the court make him a vital part of the Celtics' success.</p>
        </div>

        {/* Player Stats Placeholder */}
        <div className="stats">
  <h2>Jaylen Brown Stats</h2>
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
        <th>MP</th>
        <th>FG</th>
        <th>FGA</th>
        <th>FG%</th>
        <th>3P</th>
        <th>3PA</th>
        <th>3P%</th>
        <th>2P</th>
        <th>2PA</th>
        <th>2P%</th>
        <th>eFG%</th>
        <th>FT</th>
        <th>FTA</th>
        <th>FT%</th>
        <th>ORB</th>
        <th>DRB</th>
        <th>TRB</th>
        <th>AST</th>
        <th>STL</th>
        <th>BLK</th>
        <th>TOV</th>
        <th>PF</th>
        <th>PTS</th>
        <th>Awards</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>2016-17</td><td>20</td><td>BOS</td><td>NBA</td><td>SF</td><td>78</td><td>20</td><td>17.2</td><td>2.5</td><td>5.4</td><td>.454</td><td>0.6</td><td>1.7</td><td>.341</td><td>1.9</td><td>3.7</td><td>.507</td><td>.508</td><td>1.1</td><td>1.6</td><td>.685</td><td>0.6</td><td>2.2</td><td>2.8</td><td>0.8</td><td>0.4</td><td>0.2</td><td>0.9</td><td>1.8</td><td>6.6</td><td>ROY-8</td>
      </tr>
      <tr>
        <td>2017-18</td><td>21</td><td>BOS</td><td>NBA</td><td>SG</td><td>70</td><td>70</td><td>30.7</td><td>5.3</td><td>11.5</td><td>.465</td><td>1.7</td><td>4.4</td><td>.395</td><td>3.6</td><td>7.1</td><td>.507</td><td>.540</td><td>2.1</td><td>3.3</td><td>.644</td><td>0.9</td><td>4.0</td><td>4.9</td><td>1.6</td><td>1.0</td><td>0.4</td><td>1.8</td><td>2.6</td><td>14.5</td><td>DPOY-10</td>
      </tr>
      <tr>
        <td>2018-19</td><td>22</td><td>BOS</td><td>NBA</td><td>SG</td><td>74</td><td>25</td><td>25.9</td><td>5.0</td><td>10.7</td><td>.465</td><td>1.3</td><td>3.7</td><td>.344</td><td>3.7</td><td>7.0</td><td>.529</td><td>.525</td><td>1.8</td><td>2.7</td><td>.658</td><td>0.9</td><td>3.4</td><td>4.2</td><td>1.4</td><td>0.9</td><td>0.4</td><td>1.3</td><td>2.5</td><td>13.0</td><td></td>
      </tr>
      <tr>
        <td>2019-20</td><td>23</td><td>BOS</td><td>NBA</td><td>SG</td><td>57</td><td>57</td><td>33.9</td><td>7.5</td><td>15.6</td><td>.481</td><td>2.3</td><td>5.9</td><td>.382</td><td>5.2</td><td>9.6</td><td>.543</td><td>.554</td><td>3.1</td><td>4.3</td><td>.724</td><td>1.1</td><td>5.3</td><td>6.4</td><td>2.1</td><td>1.1</td><td>0.4</td><td>2.2</td><td>2.9</td><td>20.3</td><td></td>
      </tr>
      <tr>
        <td>2020-21</td><td>24</td><td>BOS</td><td>NBA</td><td>SG</td><td>58</td><td>58</td><td>34.5</td><td>9.3</td><td>19.2</td><td>.484</td><td>2.8</td><td>7.1</td><td>.397</td><td>6.5</td><td>12.1</td><td>.536</td><td>.558</td><td>3.3</td><td>4.3</td><td>.764</td><td>1.2</td><td>4.8</td><td>6.0</td><td>3.4</td><td>1.2</td><td>0.6</td><td>2.7</td><td>2.9</td><td>24.7</td><td>AS</td>
      </tr>
      <tr>
        <td>2021-22</td><td>25</td><td>BOS</td><td>NBA</td><td>SF</td><td>66</td><td>66</td><td>33.6</td><td>8.7</td><td>18.4</td><td>.473</td><td>2.5</td><td>7.0</td><td>.358</td><td>6.2</td><td>11.4</td><td>.544</td><td>.541</td><td>3.7</td><td>4.8</td><td>.758</td><td>0.8</td><td>5.3</td><td>6.1</td><td>3.5</td><td>1.1</td><td>0.3</td><td>2.7</td><td>2.5</td><td>23.6</td><td></td>
      </tr>
      <tr>
        <td>2022-23</td><td>26</td><td>BOS</td><td>NBA</td><td>SF</td><td>67</td><td>67</td><td>35.9</td><td>10.1</td><td>20.6</td><td>.491</td><td>2.4</td><td>7.3</td><td>.335</td><td>7.7</td><td>13.4</td><td>.576</td><td>.550</td><td>3.9</td><td>5.1</td><td>.765</td><td>1.2</td><td>5.7</td><td>6.9</td><td>3.5</td><td>1.1</td><td>0.4</td><td>2.9</td><td>2.6</td><td>26.6</td><td>AS,NBA2</td>
      </tr>
      <tr>
        <td>2023-24</td><td>27</td><td>BOS</td><td>NBA</td><td>SF</td><td>70</td><td>70</td><td>36.2</td><td>10.4</td><td>21.3</td><td>.489</td><td>2.6</td><td>7.6</td><td>.344</td><td>7.8</td><td>13.7</td><td>.569</td><td>.551</td><td>3.8</td><td>4.9</td><td>.770</td><td>1.3</td><td>5.6</td><td>6.9</td><td>3.6</td><td>1.0</td><td>0.4</td><td>2.9</td><td>2.6</td><td>26.8</td><td></td>
      </tr>
    </tbody>
  </table>
</div>

        {/* Highlight video (YouTube Short) */}
        <div className="highlight-video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/"
            title="Jayson Tatum Highlights"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </main>

      <Footer /> {/* Render the Footer component */}
    </>
  );
};

export default JaylenBrown;
