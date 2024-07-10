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

  const sortedByHigh = [...cryptoData].sort((a, b) => b.high24h - a.high24h);
  const top6Highest = sortedByHigh.slice(0, 4);

  // Sort by low24h for lowest prices
  const sortedByLow = [...cryptoData].sort((a, b) => a.low24h - b.low24h);
  const top6Lowest = sortedByLow.slice(0, 4);

  // Select 6 random cryptos for display
  const randomCryptos = [...cryptoData]
    .sort(() => 0.5 - Math.random())
    .slice(0, 8);

  const sortedByPercentChange24h = [...cryptoData].sort(
    (a, b) => b.quote.quotes_percentChange24h - a.quote.quotes_percentChange24h
  );
  const top6Trending = sortedByPercentChange24h.slice(0, 4);

  return (
    <>
      <h1>HOME</h1>
      <div className="grid-container">
        <div className="block border-top-gainers">
          <h2>TRENDING NOW</h2>
          <div className="items-container">
            {top6Trending.map((crypto, index) => (
              <Crypto
                key={crypto.name}
                id={crypto.id}
                name={crypto.name}
                logo={crypto.logo}
                symbol={crypto.symbol}
                high24h={crypto.high24h}
                low24h={crypto.low24h}
                change={crypto.quote.quotes_percentChange24h}
              />
            ))}
          </div>
        </div>
        <div className="block border-top-losers">
          <h2>BIGGEST LOSSES</h2>
          <div className="items-container">
            {top6Lowest.map((crypto, index) => (
              <Crypto
                key={crypto.name}
                id={crypto.id}
                name={crypto.name}
                logo={crypto.logo}
                symbol={crypto.symbol}
                high24h={crypto.high24h}
                low24h={crypto.low24h}
                change={crypto.quote.quotes_percentChange24h}
              />
            ))}
          </div>
        </div>
        <div className="block border-top-wins">
          <h2>BIGGEST WINS</h2>
          <div className="items-container">
            {top6Highest.map((crypto, index) => (
              <Crypto
                key={crypto.name}
                id={crypto.id}
                logo={crypto.logo}
                name={crypto.name}
                symbol={crypto.symbol}
                high24h={crypto.high24h}
                low24h={crypto.low24h}
                change={crypto.quote.quotes_percentChange24h}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="grid-second-container">
        <div className="block border-gradient">
          <h2>RANDOM CRYPTOS</h2>
          <div className="items-container-random">
            {randomCryptos.map((crypto, index) => (
              <Crypto
                key={crypto.name}
                id={crypto.id}
                name={crypto.name}
                symbol={crypto.symbol}
                logo={crypto.logo}
                high24h={crypto.high24h}
                low24h={crypto.low24h}
                change={crypto.quote.quotes_percentChange24h}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
