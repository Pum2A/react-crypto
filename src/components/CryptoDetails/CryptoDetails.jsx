import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CryptoContext } from "../CryptoContext/CryptoContext";

const CryptoDetails = () => {
  const { symbol } = useParams(); // Get the symbol from URL params
  const { cryptoData, loading, error } = useContext(CryptoContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const crypto = cryptoData.find((crypto) => crypto.symbol === symbol);

  if (!crypto) {
    return <div>No data available</div>;
  }

  return (
    <div>
      <h1>{crypto.name}</h1>
      <img src={crypto.image} alt={crypto.symbol} />
      <p>Symbol: {crypto.symbol}</p>
      <p>Rank: {crypto.market_cap_rank}</p>
      <p>High 24h: {crypto.high_24h}</p>
      <p>Low 24h: {crypto.low_24h}</p>
      <p>Current Price: {crypto.current_price}</p>
      <p>Price Change 24h: {crypto.price_change_24h}</p>
    </div>
  );
};

export default CryptoDetails;
