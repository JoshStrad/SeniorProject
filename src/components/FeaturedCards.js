import React from 'react';

const FeaturedCards = () => {
  const featuredData = [
    { id: 1, name: 'Player Name', image: 'player_image_url', stats: 'Brief stats' },
    { id: 2, name: 'Team Name', image: 'team_image_url', stats: 'Brief stats' },
  ];

  return (
    <section className="featured-section">
      <div className="container">
        <h2>Featured Players & Teams</h2>
        <div className="featured-cards">
          {featuredData.map(item => (
            <div key={item.id} className="card">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.stats}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCards;