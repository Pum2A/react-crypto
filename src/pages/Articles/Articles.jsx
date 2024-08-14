import React from "react";
import "./Articles.css"; // Create this CSS file for styling

const Articles = () => {
  return (
    <div className="articles__grid">
      {/* Latest Articles Block */}
      <div className="articles__block articles__block--latest">
        <h2 className="articles__header">Latest Articles</h2>
        <div className="articles__items">
          {/* Static Article Items */}
          <div className="article__item">
            <h3 className="article__title">Understanding Cryptocurrency</h3>
            <p className="article__description">
              A beginner's guide to the world of cryptocurrency, explaining the
              basics and key concepts.
            </p>
          </div>

          <div className="article__item">
            <h3 className="article__title">Blockchain Technology Explained</h3>
            <p className="article__description">
              Explore the fundamentals of blockchain technology and how it
              powers modern cryptocurrencies.
            </p>
          </div>

          <div className="article__item">
            <h3 className="article__title">Top 10 Cryptocurrencies in 2024</h3>
            <p className="article__description">
              A detailed look at the top 10 cryptocurrencies to watch in 2024,
              based on market trends and forecasts.
            </p>
          </div>
        </div>
      </div>

      {/* Popular Articles Block */}
      <div className="articles__block articles__block--popular">
        <h2 className="articles__header">Popular Articles</h2>
        <div className="articles__items">
          <div className="article__item">
            <h3 className="article__title">
              Investing in Cryptocurrencies: Risks and Rewards
            </h3>
            <p className="article__description">
              An in-depth analysis of the potential risks and rewards involved
              in cryptocurrency investments.
            </p>
          </div>

          <div className="article__item">
            <h3 className="article__title">The Future of Digital Currencies</h3>
            <p className="article__description">
              Predictions and insights into the future of digital currencies and
              their impact on the global economy.
            </p>
          </div>

          <div className="article__item">
            <h3 className="article__title">Cryptocurrency Security Tips</h3>
            <p className="article__description">
              Essential security tips to protect your digital assets from
              threats like hacking and fraud.
            </p>
          </div>
        </div>
      </div>

      {/* Editor's Picks Block */}
      <div className="articles__block articles__block--editors-picks">
        <h2 className="articles__header">Editor's Picks</h2>
        <div className="articles__items">
          <div className="article__item">
            <h3 className="article__title">How to Mine Cryptocurrency</h3>
            <p className="article__description">
              Learn the basics of cryptocurrency mining and how you can get
              started with mining on your own.
            </p>
          </div>

          <div className="article__item">
            <h3 className="article__title">
              Understanding DeFi: Decentralized Finance
            </h3>
            <p className="article__description">
              A deep dive into decentralized finance (DeFi) and its growing role
              in the financial sector.
            </p>
          </div>

          <div className="article__item">
            <h3 className="article__title">
              The Impact of Cryptocurrency Regulations
            </h3>
            <p className="article__description">
              An overview of how global regulations are shaping the
              cryptocurrency landscape.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
