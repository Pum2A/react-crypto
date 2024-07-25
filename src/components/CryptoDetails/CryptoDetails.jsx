import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CryptoContext } from "../CryptoContext/CryptoContext";
import "./CryptoDetails.css";

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
    <>
      <div className="product-details-header">
        <h3>Product Details</h3>
      </div>
      <div className="details-container">
        <div className="details-block">
          <div className="details-content-container">
            <div className="block-content-container">
              <p>Logo</p>
              <img src={crypto.image} alt={crypto.id} className="details-img" />
            </div>
            <div className="block-content-container">
              <p>Name</p>
              <h3 className="crypto-details-name">{crypto.name}</h3>
            </div>
            <div className="block-content-container">
              <p>Symbol:</p>
              <p>{crypto.symbol}</p>
            </div>
            <div className="block-content-container">
              <p>Rank:</p>
              <p>{crypto.market_cap_rank}</p>
            </div>
            <div className="block-content-container">
              <p>High 24h</p>
              <p>{crypto.high_24h}</p>
            </div>
            <div className="block-content-container">
              <p>Low 24H</p>
              <p>{crypto.low_24h}</p>
            </div>
            <div className="block-content-container">
              <p>Current Price:</p>
              <p>{crypto.current_price}</p>
            </div>
            <div className="block-content-container">
              <p>Price Change 24h: </p>
              <p>{crypto.price_change_24h}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CryptoDetails;
