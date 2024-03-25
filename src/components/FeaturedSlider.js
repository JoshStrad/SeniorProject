import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const FeaturedSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div>
        {/* Slide 1 content */}
        <h3>Devin Booker</h3>
        <img src="https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fphoenix-suns-devin-booker-min--ourabdsk.png&w=750&h=750&f=webp" alt="Devin Booker" />
        <p>2024 season stats: 27.8 ppg 7.0 apg</p>
      </div>
      <div>
        {/* Slide 2 content */}
        <h3>Patrick Mahomes</h3>
        <img src="https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnfl%2Fplayers%2Fkansas-city-chiefs-patrick-mahomes2020-min--jxpbawil.png&w=750&h=750&f=webp" alt="Player 2" />
        <p>2023-24 season stats: 4378 passing yards 37 TDs</p>
      </div>
      {/* Add more slides as needed */}
      <div>
        {/* Slide 2 content */}
        <h3>Shohei Ohtani</h3>
        <img src="https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fmlb%2Fplayers%2Flos-angeles-dodgers-shohei-ohtani-min--_fbzujfn.png&w=750&h=750&f=webp" alt="Player 2" />
        <p>2023 season stats: 3.14 ERA 132.2 IP 167Ks</p>
      </div>
    </Slider>
  );
};

export default FeaturedSlider;