import React from "react";
import "./Crypto.css";
import { Link } from "react-router-dom";

const Crypto = ({
  name,
  price_change_24h,
  symbol,
  current_price,
  image,
  market_cap_rank,
  showButton,
  id,
}) => {
  const changeColor = price_change_24h >= 0 ? "green" : "red";

  return (
    <Link to={`/crypto/${id}`}>
      <div className="item-container">
        <div className="logo">
          <img src={image} alt={`${name} logo`} />
        </div>
        <div className="item-desc">
          <span>
            <p>Rank:</p>
            <p>{market_cap_rank}</p>
          </span>
          <span>
            <p>Name:</p>
            <p>{symbol}</p>
          </span>
          <span>
            <p>Price:</p>
            <p>{current_price}</p>
          </span>
          <span>
            <p>24h:</p>
            <p style={{ color: changeColor }}>{price_change_24h}</p>
          </span>
          {showButton && <button className="details-btn">Details</button>}
        </div>
      </div>
    </Link>
  );
};

export default Crypto;
