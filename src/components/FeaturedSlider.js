import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'gatsby';

const FeaturedSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 768,  settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <Slider {...settings} className="featured-slider">
      <div className="slide player-card suns-aura">
        <a href="/nba/suns/devin-booker" className="slide-link">
        <h3>Devin Booker</h3>
        <img
          src="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3136193.png&w=350&h=254"
          alt="Devin Booker"
        />
        <p>2026 season stats: 27.8 ppg 7.0 apg</p>
        </a>
      </div>

      <div className="slide player-card chiefs-aura">
        <a href="/nfl/chiefs/patrick-mahomes" className="slide-link">
        <h3>Patrick Mahomes</h3>
        <img
          src="https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3139477.png"
          alt="Patrick Mahomes"
        />
        <p>2023-24 season stats: 4378 passing yards 37 TDs</p>
        </a>
      </div>

      <div className="slide player-card dodgers-aura">
        <a href="/mlb/dodgers/shohei-ohtani" className="slide-link">
        <h3>Shohei Ohtani</h3>
        <img
          src="https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/39832.png&w=350&h=254"
          alt="Shohei Ohtani"
        />
        <p>2023 season stats: 3.86 ERA 186.2 IP 281Ks</p>
        </a>
      </div>

      <div className="slide player-card braves-aura">
        <a href="/mlb/braves/spencer-strider" className="slide-link">
        <h3>Spencer Strider</h3>
        <img
          src="https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/4307825.png&w=350&h=254"
          alt="Spencer Strider"
        />
        <p>2023 season stats: 3.14 ERA 132.2 IP 167Ks</p>
        </a>
      </div>

      <div className="slide player-card chargers-aura">
        <a href="/nfl/chargers/justin-herbert" className="slide-link">
        <h3>Justin Herbert</h3>
        <img
          src="https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4038941.png&w=350&h=254"
          alt="Justin Herbert"
        />
        <p>2023 season stats: 3,134 pass yards 20 TDs (13 Games)</p>
        </a>
      </div>

      <div className="slide player-card lakers-aura">
        <a href="/nba/lakers/luka-don-i" className="slide-link">
        <h3>Luka Doncic</h3>
        <img
          src="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3945274.png&w=350&h=254"
          alt="Luka Doncic"
        />
        <p>2023 current season stats: 34.0 PPG 9.0 RPG 9.9 APG</p>
        </a>
      </div>

      <div className="slide player-card lakers-aura">
        <a href="/nba/lakers/lebron-james" className="slide-link">
        <h3>LeBron James</h3>
        <img
          src="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1966.png&w=350&h=254"
          alt="LeBron James"
        />
        <p>2024 current season stats: 25.4 PPG 7.2 RPG 8.1 APG</p>
        </a>
      </div>
    </Slider>
  );
};

export default FeaturedSlider;
