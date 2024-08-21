import React from "react";
import styles from "./Articles.module.css"; // Importing the CSS Module

const Articles = () => {
  return (
    <div className={styles.articlesContainer}>
      <div className={styles.articlesGrid}>
        {/* Latest Articles Block */}
        <div className={`${styles.articlesBlock} ${styles.latest}`}>
          <h2 className={styles.articlesHeader}>Latest Articles</h2>
          <div className={styles.articlesItems}>
            {/* Static Article Items */}
            <div className={styles.articleItem}>
              <h3 className={styles.articleTitle}>
                Understanding Cryptocurrency
              </h3>
              <p className={styles.articleDescription}>
                A beginner's guide to the world of cryptocurrency, explaining
                the basics and key concepts.
              </p>
            </div>

            <div className={styles.articleItem}>
              <h3 className={styles.articleTitle}>
                Blockchain Technology Explained
              </h3>
              <p className={styles.articleDescription}>
                Explore the fundamentals of blockchain technology and how it
                powers modern cryptocurrencies.
              </p>
            </div>

            <div className={styles.articleItem}>
              <h3 className={styles.articleTitle}>
                Top 10 Cryptocurrencies in 2024
              </h3>
              <p className={styles.articleDescription}>
                A detailed look at the top 10 cryptocurrencies to watch in 2024,
                based on market trends and forecasts.
              </p>
            </div>
          </div>
        </div>

        {/* Popular Articles Block */}
        <div className={`${styles.articlesBlock} ${styles.popular}`}>
          <h2 className={styles.articlesHeader}>Popular Articles</h2>
          <div className={styles.articlesItems}>
            <div className={styles.articleItem}>
              <h3 className={styles.articleTitle}>
                Investing in Cryptocurrencies: Risks and Rewards
              </h3>
              <p className={styles.articleDescription}>
                An in-depth analysis of the potential risks and rewards involved
                in cryptocurrency investments.
              </p>
            </div>

            <div className={styles.articleItem}>
              <h3 className={styles.articleTitle}>
                The Future of Digital Currencies
              </h3>
              <p className={styles.articleDescription}>
                Predictions and insights into the future of digital currencies
                and their impact on the global economy.
              </p>
            </div>

            <div className={styles.articleItem}>
              <h3 className={styles.articleTitle}>
                Cryptocurrency Security Tips
              </h3>
              <p className={styles.articleDescription}>
                Essential security tips to protect your digital assets from
                threats like hacking and fraud.
              </p>
            </div>
          </div>
        </div>

        {/* Editor's Picks Block */}
        <div className={`${styles.articlesBlock} ${styles.editorsPicks}`}>
          <h2 className={styles.articlesHeader}>Editor's Picks</h2>
          <div className={styles.articlesItems}>
            <div className={styles.articleItem}>
              <h3 className={styles.articleTitle}>
                How to Mine Cryptocurrency
              </h3>
              <p className={styles.articleDescription}>
                Learn the basics of cryptocurrency mining and how you can get
                started with mining on your own.
              </p>
            </div>

            <div className={styles.articleItem}>
              <h3 className={styles.articleTitle}>
                Understanding DeFi: Decentralized Finance
              </h3>
              <p className={styles.articleDescription}>
                A deep dive into decentralized finance (DeFi) and its growing
                role in the financial sector.
              </p>
            </div>

            <div className={styles.articleItem}>
              <h3 className={styles.articleTitle}>
                The Impact of Cryptocurrency Regulations
              </h3>
              <p className={styles.articleDescription}>
                An overview of how global regulations are shaping the
                cryptocurrency landscape.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
