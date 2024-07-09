import React, { useContext } from "react";
import { CryptoContext } from "../../components/CryptoContext/CryptoContext";
import "./Home.css";
import Crypto from "../../components/Crypto/Crypto";

const Home = () => {
  const { cryptoData, loading, error } = useContext(CryptoContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!Array.isArray(cryptoData) || cryptoData.length === 0) {
    console.log("Crypto data is not an array or is empty:", cryptoData);
    return <div>No data available</div>;
  }

  return (
    <>
      <h1>HOME</h1>
      <div className="grid-container">
        <div className="block border-top-gainers">
          <h2>TRENDING NOW</h2>
          <div className="items-container">
            <div>
              {cryptoData.map((crypto, index) => (
                <div key={index}>
                  <h2>{crypto.name}</h2>
                  <p>{crypto.description}</p>
                  {/* Render other properties as needed */}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="block border-top-losers">
          <h2>BIGGEST LOSSES</h2>
          <div className="items-container">
            <div>
              {cryptoData.map((crypto, index) => (
                <div key={index}>
                  <h2>{crypto.name}</h2>
                  <p>{crypto.description}</p>
                  {/* Render other properties as needed */}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="block border-top-wins">
          <h2>BIGGEST WINS</h2>
          <div className="items-container">
            <div>
              {cryptoData.map((crypto, index) => (
                <div key={index}>
                  <h2>{crypto.name}</h2>
                  <p>{crypto.description}</p>
                  {/* Render other properties as needed */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="grid-second-container">
        <div className="block border-gradient">
          <h2>RANDOM CRYPTOS</h2>
          <div className="items-container-random">
            {cryptoData.map((crypto, index) => (
              <div key={index}>
                <h2>{crypto.name}</h2>
                <p>{crypto.description}</p>
                {/* Render other properties as needed */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
