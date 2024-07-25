import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CryptoContext } from "../CryptoContext/CryptoContext";

const CryptoDetails = () => {
  const { id } = useParams(); // Get the id from URL params
  const { cryptoData, loading, error } = useContext(CryptoContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!Array.isArray(cryptoData) || cryptoData.length === 0) {
    console.log(
      "No crypto data available or data is not in an array:",
      cryptoData
    );
    return <div>No data available</div>;
  }

  console.log(
    "Available IDs in cryptoData:",
    cryptoData.map((crypto) => crypto.id)
  );
  console.log("Searching for ID:", id);

  // Find the crypto by ID
  const crypto = cryptoData.find((crypto) => crypto.id === id);

  if (!crypto) {
    console.log("No matching data for ID:", id);
    return <div>No data available</div>;
  }

  return (
    <div>
      <h1>{crypto.name}</h1>
      <img src={crypto.image} alt={crypto.id} />
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
