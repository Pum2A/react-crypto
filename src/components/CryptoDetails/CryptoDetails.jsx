import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CryptoContext } from "../../components/CryptoContext/CryptoContext";
import "./CryptoDetails.css";

const CryptoDetails = () => {
  const { id } = useParams();
  const { cryptoData, loading, error } = useContext(CryptoContext);
  const [crypto, setCrypto] = useState(null);

  useEffect(() => {
    if (cryptoData && !loading) {
      const foundCrypto = cryptoData.find((c) => c.id === id);
      setCrypto(foundCrypto);
    }
  }, [cryptoData, loading, id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!crypto) {
    return <div>No data available</div>;
  }

  return (
    <div className="crypto-details">
      <div className="crypto-details__header">
        <img
          src={crypto.image}
          alt={`${crypto.name} logo`}
          className="crypto-details__image"
        />
        <h1>
          {crypto.name} ({crypto.symbol.toUpperCase()})
        </h1>
      </div>
      <div className="crypto-details__stats">
        <div className="crypto-details__stat">
          <span className="label">Current Price:</span>
          <span className="value">${crypto.current_price}</span>
        </div>
        <div className="crypto-details__stat">
          <span className="label">Market Cap Rank:</span>
          <span className="value">{crypto.market_cap_rank}</span>
        </div>
        <div className="crypto-details__stat">
          <span className="label">24h High:</span>
          <span className="value">${crypto.high_24h}</span>
        </div>
        <div className="crypto-details__stat">
          <span className="label">24h Low:</span>
          <span className="value">${crypto.low_24h}</span>
        </div>
        <div className="crypto-details__stat">
          <span className="label">Price Change 24h:</span>
          <span
            className={`value ${
              crypto.price_change_percentage_24h >= 0 ? "positive" : "negative"
            }`}>
            {crypto.price_change_percentage_24h.toFixed(2)}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default CryptoDetails;
