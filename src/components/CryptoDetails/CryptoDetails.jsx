import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CryptoContext } from "../CryptoContext/CryptoContext";

const CryptoDetails = () => {
  const { cryptoData, loading, error } = useContext(CryptoContext);

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
    <div>
      <h1>{crypto.name}</h1>
      <img src={crypto.logo} alt={crypto.symbol} />
      <p>Symbol: {crypto.symbol}</p>
      <p>Rank: {crypto.rank}</p>
      <p>High 24h: {crypto.high24h}</p>
      <p>Low 24h: {crypto.low24h}</p>
      <p>Change 24h: {crypto.quote.quotes_percentChange24h}</p>
      <p>Market Cap: {crypto.marketCap}</p>
      <p>Volume 24h: {crypto.volume24h}</p>
    </div>
  );
};

export default CryptoDetails;
