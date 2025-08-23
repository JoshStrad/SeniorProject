import React from 'react';
import Header from '../../../components/Header';
import './jayson-tatum.css'; // Import the player-specific CSS

const JaysonTatum = () => {
  return (
    <>
      <Header />
      <main className="profile-container">
        <h1>Jayson Tatum</h1>
        <p>Number: 0</p>
        <p>Height: 6'10"</p>
        <p>Age: 26</p>
        <p>Position: Small Foward</p>
        <p>College: Duke</p>
        <p>Drafted: 3rd overall in the 2017 NBA Draft by the Boston Celtics</p>

        {/* Player Image */}
        <div className="player-image">
          <img 
            src="https://cdn.statmuse.com/img/nba/players/boston-celtics-jayson-tatum2022-min--4e07qz-z.png" 
            alt="Jayson Tatum" 
            className="profile-img" 
          />
        </div>

        {/* Player Bio */}
        <div className="bio">
          <h2>Bio</h2>
          <p> Jayson Tatum is a dynamic and versatile forward for the Boston Celtics, known for his exceptional scoring ability, athleticism, and leadership on the court. 
            Since being drafted in 2017, he has become one of the NBA’s brightest stars, consistently averaging over 20 points per game and earning multiple All-Star selections. 
            Tatum is celebrated for his smooth shooting touch from beyond the arc, as well as his ability to drive to the basket and finish in traffic.
             His basketball IQ and work ethic make him a key player for the Celtics as they contend for championships and as he contends for MVP awards.</p>
        </div>

        {/* Player Stats Placeholder */}
        <div className="stats">
  <h2>Jayson Tatum Stats</h2>
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
        <td>2017-18</td><td>19</td><td>BOS</td><td>NBA</td><td>SF</td><td>80</td><td>80</td><td>30.5</td><td>4.6</td><td>9.8</td><td>.475</td><td>1.3</td><td>3.0</td><td>.434</td><td>3.3</td><td>6.8</td><td>.487</td><td>.519</td><td>2.7</td><td>3.2</td><td>.826</td><td>0.7</td><td>4.0</td><td>5.0</td><td>1.6</td><td>1.0</td><td>0.7</td><td>1.4</td><td>2.3</td><td>13.9</td><td>AS</td>
      </tr>
      <tr>
        <td>2018-19</td><td>20</td><td>BOS</td><td>NBA</td><td>SF</td><td>79</td><td>79</td><td>31.1</td><td>5.2</td><td>12.0</td><td>.450</td><td>1.5</td><td>4.6</td><td>.373</td><td>3.7</td><td>7.4</td><td>.496</td><td>.513</td><td>3.2</td><td>4.0</td><td>.855</td><td>0.7</td><td>4.4</td><td>6.0</td><td>2.1</td><td>1.1</td><td>0.7</td><td>1.7</td><td>2.3</td><td>15.7</td><td></td>
      </tr>
      <tr>
        <td>2019-20</td><td>21</td><td>BOS</td><td>NBA</td><td>SF</td><td>66</td><td>66</td><td>34.3</td><td>8.4</td><td>18.2</td><td>.450</td><td>2.9</td><td>7.1</td><td>.402</td><td>5.5</td><td>11.1</td><td>.495</td><td>.523</td><td>3.5</td><td>4.7</td><td>.812</td><td>0.9</td><td>5.7</td><td>7.0</td><td>3.0</td><td>1.4</td><td>0.9</td><td>2.0</td><td>2.4</td><td>23.4</td><td>AS</td>
      </tr>
      <tr>
        <td>2020-21</td><td>22</td><td>BOS</td><td>NBA</td><td>SF</td><td>64</td><td>64</td><td>35.8</td><td>10.1</td><td>21.2</td><td>.459</td><td>2.7</td><td>7.6</td><td>.386</td><td>7.3</td><td>13.6</td><td>.538</td><td>.511</td><td>4.7</td><td>5.6</td><td>.866</td><td>0.9</td><td>6.4</td><td>7.4</td><td>4.3</td><td>1.2</td><td>0.5</td><td>2.7</td><td>2.2</td><td>26.4</td><td>AS,NBA3</td>
      </tr>
      <tr>
        <td>2021-22</td><td>23</td><td>BOS</td><td>NBA</td><td>SF</td><td>76</td><td>76</td><td>35.9</td><td>9.9</td><td>20.6</td><td>.453</td><td>3.0</td><td>8.6</td><td>.353</td><td>6.9</td><td>12.0</td><td>.575</td><td>.510</td><td>5.0</td><td>6.2</td><td>.849</td><td>1.0</td><td>7.0</td><td>8.0</td><td>4.4</td><td>1.1</td><td>0.6</td><td>2.9</td><td>2.3</td><td>27.0</td><td>AS,NBA1</td>
      </tr>
      <tr>
        <td>2022-23</td><td>24</td><td>BOS</td><td>NBA</td><td>SF</td><td>74</td><td>74</td><td>36.9</td><td>10.3</td><td>21.1</td><td>.491</td><td>3.2</td><td>9.0</td><td>.356</td><td>7.1</td><td>12.1</td><td>.586</td><td>.538</td><td>4.9</td><td>5.9</td><td>.888</td><td>0.9</td><td>6.5</td><td>7.4</td><td>4.6</td><td>1.2</td><td>0.7</td><td>3.0</td><td>2.3</td><td>30.1</td><td>AS,NBA1</td>
      </tr>
      <tr>
        <td>2023-24</td><td>25</td><td>BOS</td><td>NBA</td><td>SF</td><td>80</td><td>80</td><td>37.1</td><td>10.7</td><td>22.0</td><td>.487</td><td>3.3</td><td>8.9</td><td>.367</td><td>7.4</td><td>13.1</td><td>.564</td><td>.523</td><td>4.7</td><td>5.7</td><td>.914</td><td>0.9</td><td>7.1</td><td>8.0</td><td>5.1</td><td>1.1</td><td>0.6</td><td>2.7</td><td>2.5</td><td>32.1</td><td>AS,NBA1,MVP</td>
      </tr>
    </tbody>
  </table>
</div>

        {/* Highlight video (YouTube Short) */}
        <div className="highlight-video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/3E2FbjrtmdI"
            title="Jayson Tatum Highlights"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </main>
    </>
  );
};

export default JaysonTatum;
