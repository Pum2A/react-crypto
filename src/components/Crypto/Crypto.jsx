import React from "react";
import "./Crypto.css";

const Crypto = ({
  name,
  change,
  symbol,
  high24h,
  low24h,
  logo,
  rank,
  showButton, // Add the showButton prop
}) => {
  const changeColor = change >= 0 ? "green" : "red";

  return (
    <div className="item-container">
      <div className="logo">
        <img src={logo} alt={`${name} logo`} />
      </div>
      <div className="item-desc">
        <span>
          <p>Rank:</p>
          <p>{rank}</p>
        </span>
        <span>
          <p>Name</p>
          <p>{symbol}</p>
        </span>
        <span>
          <p>Price</p>
          <p>{high24h}</p>
        </span>
        <span>
          <p>24h</p>
          <p style={{ color: changeColor }}>{change}</p>
        </span>
        {showButton && <button className="details-btn">Details</button>} {}
      </div>
    </div>
  );
};

export default Crypto;
