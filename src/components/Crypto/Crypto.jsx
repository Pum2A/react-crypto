import React from "react";
import "./Crypto.css";
import { Link } from "react-router-dom";

const Crypto = ({
  id,
  name,
  symbol,
  image,
  current_price,
  high_24h,
  low_24h,
  market_cap_rank,
  price_change_24h,
  showButton,
}) => {
  const changeColor = price_change_24h >= 0 ? "green" : "red";

  return (
    <Link to={`/crypto/${id}`}>
      <div className="crypto">
        <div className="crypto__rank">{market_cap_rank}</div>
        <div className="crypto__image">
          <img src={image} alt={`${symbol} logo`} />
        </div>
        <div className="crypto__info">
          <div className="crypto__symbol">{symbol.toUpperCase()}</div>
          <div className="crypto__price">${current_price}</div>
          <div
            className={`crypto__change ${
              price_change_24h >= 0
                ? "crypto__change--positive"
                : "crypto__change--negative"
            }`}>
            {price_change_24h}%
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Crypto;
