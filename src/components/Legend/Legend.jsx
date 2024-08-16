// Legend.js
import React from "react";
import styles from "./Legend.module.css"; // Import CSS for styling

const Legend = () => {
  return (
    <div className={styles.legend}>
      <div className={styles.legendItem}>Name</div>
      <div className={styles.legendItem}>Logo</div>
      <div className={styles.legendItem}>Rank</div>
      <div className={styles.legendItem}>Price</div>
      <div className={styles.legendItem}>Change</div>
      <div className={styles.legendItem}>Favorite</div>
    </div>
  );
};

export default Legend;
