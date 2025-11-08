import React from 'react';
import Header from '../../../components/Header';
import './yankees.css';

const GerritCole = () => {
  return (
    <>
      <Header />
      <main className="profile-container yankees-aura">
        <h1>Gerrit Cole</h1>

        {/* Bio (top, like QB pages) */}
        <div className="bio">
          <p>
            Gerrit Cole is the ace of the New York Yankees and one of the most dominant pitchers
            of his generation. Known for his overpowering fastball and elite strikeout numbers,
            Cole has been a consistent Cy Young contender throughout his career. A former first-overall
            pick, he’s led both the Astros and Yankees rotations and claimed the 2023 AL Cy Young Award.
          </p>
        </div>

        <p>Number: 45 &nbsp;|&nbsp; Height: 6'4" &nbsp;|&nbsp; Age: 34</p>
        <p>Position: Starting Pitcher</p>
        <p>Team: New York Yankees</p>
        <p>Throws: Right &nbsp;|&nbsp; Bats: Right</p>

        <div className="player-image">
          <img
            src="https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/32081.png"
            alt="Gerrit Cole"
            className="profile-img"
          />
        </div>

        <h2>Pitching Stats by Season</h2>
        <table className="stats-table">
          <thead>
            <tr>
              <th>Season</th>
              <th>Age</th>
              <th>Team</th>
              <th>Lg</th>
              <th>WAR</th>
              <th>W</th>
              <th>L</th>
              <th>W-L%</th>
              <th>ERA</th>
              <th>G</th>
              <th>GS</th>
              <th>GF</th>
              <th>CG</th>
              <th>SHO</th>
              <th>SV</th>
              <th>IP</th>
              <th>H</th>
              <th>R</th>
              <th>ER</th>
              <th>HR</th>
              <th>BB</th>
              <th>IBB</th>
              <th>SO</th>
              <th>HBP</th>
              <th>BK</th>
              <th>WP</th>
              <th>BF</th>
              <th>ERA+</th>
              <th>FIP</th>
              <th>WHIP</th>
              <th>H9</th>
              <th>HR9</th>
              <th>BB9</th>
              <th>SO9</th>
              <th>SO/BB</th>
              <th>Awards</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>2013</td><td>22</td><td>PIT</td><td>NL</td><td>1.4</td><td>10</td><td>7</td><td>.588</td><td>3.22</td><td>19</td><td>19</td><td>0</td><td>0</td><td>0</td><td>0</td><td>117.1</td><td>109</td><td>43</td><td>42</td><td>7</td><td>28</td><td>0</td><td>100</td><td>3</td><td>0</td><td>4</td><td>469</td><td>111</td><td>2.91</td><td>1.168</td><td>8.4</td><td>0.5</td><td>2.1</td><td>7.7</td><td>3.57</td><td></td></tr>
            <tr><td>2014</td><td>23</td><td>PIT</td><td>NL</td><td>1.2</td><td>11</td><td>5</td><td>.688</td><td>3.65</td><td>22</td><td>22</td><td>0</td><td>0</td><td>0</td><td>0</td><td>138.0</td><td>127</td><td>58</td><td>56</td><td>11</td><td>40</td><td>1</td><td>138</td><td>9</td><td>1</td><td>9</td><td>571</td><td>99</td><td>3.23</td><td>1.210</td><td>8.3</td><td>0.7</td><td>2.6</td><td>9.0</td><td>3.45</td><td></td></tr>
            <tr><td>2015</td><td>24</td><td>PIT</td><td>NL</td><td>4.3</td><td>19</td><td>8</td><td>.704</td><td>2.60</td><td>32</td><td>32</td><td>0</td><td>0</td><td>0</td><td>0</td><td>208.0</td><td>183</td><td>71</td><td>60</td><td>11</td><td>44</td><td>1</td><td>202</td><td>10</td><td>0</td><td>7</td><td>832</td><td>149</td><td>2.66</td><td>1.091</td><td>7.9</td><td>0.5</td><td>1.9</td><td>8.7</td><td>4.59</td><td>AS,CYA-4,MVP-19</td></tr>
            <tr><td>2016</td><td>25</td><td>PIT</td><td>NL</td><td>1.5</td><td>7</td><td>10</td><td>.412</td><td>3.88</td><td>21</td><td>21</td><td>0</td><td>1</td><td>0</td><td>0</td><td>116.0</td><td>131</td><td>57</td><td>50</td><td>7</td><td>36</td><td>3</td><td>98</td><td>6</td><td>1</td><td>5</td><td>506</td><td>107</td><td>3.33</td><td>1.440</td><td>10.2</td><td>0.5</td><td>2.8</td><td>7.6</td><td>2.72</td><td></td></tr>
            <tr><td>2017</td><td>26</td><td>PIT</td><td>NL</td><td>2.6</td><td>12</td><td>12</td><td>.500</td><td>4.26</td><td>33</td><td>33</td><td>0</td><td>0</td><td>0</td><td>0</td><td>203.0</td><td>199</td><td>98</td><td>96</td><td>31</td><td>55</td><td>1</td><td>196</td><td>4</td><td>0</td><td>7</td><td>849</td><td>100</td><td>4.08</td><td>1.251</td><td>8.8</td><td>1.4</td><td>2.4</td><td>8.7</td><td>3.56</td><td></td></tr>
            <tr><td>2018</td><td>27</td><td>HOU</td><td>AL</td><td>5.2</td><td>15</td><td>5</td><td>.750</td><td>2.88</td><td>32</td><td>32</td><td>0</td><td>1</td><td>1</td><td>0</td><td>200.1</td><td>143</td><td>68</td><td>64</td><td>19</td><td>64</td><td>0</td><td>276</td><td>7</td><td>0</td><td>9</td><td>799</td><td>144</td><td>2.70</td><td>1.033</td><td>6.4</td><td>0.9</td><td>2.9</td><td>12.4</td><td>4.31</td><td>AS,CYA-5</td></tr>
            <tr><td>2019</td><td>28</td><td>HOU</td><td>AL</td><td>6.7</td><td>20</td><td>5</td><td>.800</td><td>2.50</td><td>33</td><td>33</td><td>0</td><td>0</td><td>0</td><td>0</td><td>212.1</td><td>142</td><td>66</td><td>59</td><td>29</td><td>48</td><td>0</td><td>326</td><td>3</td><td>3</td><td>4</td><td>817</td><td>185</td><td>2.64</td><td>0.895</td><td>6.0</td><td>1.2</td><td>2.0</td><td>13.8</td><td>6.79</td><td>AS,CYA-2,MVP-10</td></tr>
            <tr><td>2020</td><td>29</td><td>NYY</td><td>AL</td><td>2.2</td><td>7</td><td>3</td><td>.700</td><td>2.84</td><td>12</td><td>12</td><td>0</td><td>2</td><td>1</td><td>0</td><td>73.0</td><td>53</td><td>27</td><td>23</td><td>14</td><td>17</td><td>0</td><td>94</td><td>2</td><td>0</td><td>2</td><td>288</td><td>151</td><td>3.89</td><td>0.959</td><td>6.5</td><td>1.7</td><td>2.1</td><td>11.6</td><td>5.53</td><td>CYA-4</td></tr>
            <tr><td>2021</td><td>30</td><td>NYY</td><td>AL</td><td>5.7</td><td>16</td><td>8</td><td>.667</td><td>3.23</td><td>30</td><td>30</td><td>0</td><td>2</td><td>1</td><td>0</td><td>181.1</td><td>151</td><td>69</td><td>65</td><td>24</td><td>41</td><td>0</td><td>243</td><td>2</td><td>1</td><td>5</td><td>726</td><td>133</td><td>2.92</td><td>1.059</td><td>7.5</td><td>1.2</td><td>2.0</td><td>12.1</td><td>5.93</td><td>AS,CYA-2,MVP-15</td></tr>
            <tr><td>2022</td><td>31</td><td>NYY</td><td>AL</td><td>2.6</td><td>13</td><td>8</td><td>.619</td><td>3.50</td><td>33</td><td>33</td><td>0</td><td>0</td><td>0</td><td>0</td><td>200.2</td><td>154</td><td>81</td><td>78</td><td>33</td><td>50</td><td>0</td><td>257</td><td>2</td><td>2</td><td>2</td><td>793</td><td>112</td><td>3.47</td><td>1.017</td><td>6.9</td><td>1.5</td><td>2.2</td><td>11.5</td><td>5.14</td><td>AS,CYA-9</td></tr>
            <tr><td>2023</td><td>32</td><td>NYY</td><td>AL</td><td>7.4</td><td>15</td><td>4</td><td>.789</td><td>2.63</td><td>33</td><td>33</td><td>0</td><td>2</td><td>2</td><td>0</td><td>209.0</td><td>157</td><td>64</td><td>61</td><td>20</td><td>48</td><td>0</td><td>222</td><td>7</td><td>1</td><td>4</td><td>821</td><td>165</td><td>3.16</td><td>0.981</td><td>6.8</td><td>0.9</td><td>2.1</td><td>9.6</td><td>4.63</td><td>AS,CYA-1,MVP-11</td></tr>
            <tr><td>2024</td><td>33</td><td>NYY</td><td>AL</td><td>1.9</td><td>8</td><td>5</td><td>.615</td><td>3.41</td><td>17</td><td>17</td><td>0</td><td>0</td><td>0</td><td>0</td><td>95.0</td><td>78</td><td>38</td><td>36</td><td>11</td><td>29</td><td>1</td><td>99</td><td>6</td><td>0</td><td>0</td><td>390</td><td>118</td><td>3.69</td><td>1.126</td><td>7.4</td><td>1.0</td><td>2.7</td><td>9.4</td><td>3.41</td><td></td></tr>
          </tbody>
        </table>

      </main>
    </>
  );
};

export default GerritCole;
