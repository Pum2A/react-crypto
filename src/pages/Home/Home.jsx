import React, { useContext } from "react";
import { CryptoContext } from "../../components/CryptoContext/CryptoContext";
import "./Home.css";
import Crypto from "../../components/Crypto/Crypto";

const Home = () => {
  const { cryptoData, loading, error } = useContext(CryptoContext);

  const formatPercentage = (value) => {
    let numberValue = parseFloat(value);
    return `${numberValue.toFixed(2)}`;
  };

  const formatPercentageLost = (v) => {
    let value = parseFloat(v);
    return `${value.toFixed(7)}`;
  };

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
  const top6Highest = sortedByHigh.slice(0, 5);

  const sortedByLow = [...cryptoData].sort((a, b) => a.low24h - b.low24h);
  const top6Lowest = sortedByLow.slice(0, 5);

  const randomCryptos = [...cryptoData]
    .sort(() => 0.5 - Math.random())
    .slice(0, 7);

  const sortedByPercentChange24h = [...cryptoData].sort(
    (a, b) => b.quote.quotes_percentChange24h - a.quote.quotes_percentChange24h
  );
  const top6Trending = sortedByPercentChange24h.slice(0, 5);

  return (
    <>
      <h1>HOME</h1>
      <div className="grid-container">
        <div className="block border-gradient border-top-gainers">
          <h2 className="header">TRENDING NOW</h2>
          <div className="items-container">
            {top6Trending.map((crypto, index) => (
              <Crypto
                key={crypto.name}
                rank={`${crypto.rank}`}
                id={crypto.id}
                symbol={crypto.symbol}
                logo={crypto.logo}
                high24h={`${formatPercentage(crypto.high24h)} $`}
                low24h={`Lowest price ${crypto.low24h}`}
                change={`${formatPercentage(
                  crypto.quote.quotes_percentChange24h
                )}`}
              />
            ))}
          </div>
        </div>
        <div className="block border-gradient border-top-losers">
          <h2 className="header">BIGGEST LOSSES</h2>
          <div className="items-container">
            {top6Lowest.map((crypto) => (
              <Crypto
                key={crypto.name}
                rank={`${crypto.rank}`}
                id={crypto.id}
                symbol={crypto.symbol}
                logo={crypto.logo}
                high24h={`${formatPercentage(crypto.high24h)} $`}
                low24h={`Lowest price ${crypto.low24h}`}
                change={`${formatPercentageLost(
                  crypto.quote.quotes_percentChange24h
                )}`}
                showButton={false} // Don't show the button
              />
            ))}
          </div>
        </div>
        <div className="block border-gradient border-top-wins">
          <h2 className="header">BIGGEST WINS</h2>
          <div className="items-container">
            {top6Highest.map((crypto) => (
              <Crypto
                key={crypto.name}
                rank={`${crypto.rank}`}
                id={crypto.id}
                symbol={crypto.symbol}
                logo={crypto.logo}
                high24h={`${formatPercentage(crypto.high24h)} $`}
                low24h={`Lowest price ${crypto.low24h}`}
                change={formatPercentage(crypto.quote.quotes_percentChange24h)}
                showButton={false} // Don't show the button
              />
            ))}
          </div>
        </div>
      </div>
      <div className="grid-second-container">
        <div className="block border-gradient">
          <h2 className="header-random">RANDOM CRYPTOS</h2>
          <div className="items-container-random">
            {randomCryptos.map((crypto) => (
              <Crypto
                key={crypto.name}
                rank={`${crypto.rank}`}
                id={crypto.id}
                symbol={crypto.symbol}
                logo={crypto.logo}
                high24h={`${formatPercentage(crypto.high24h)} $`}
                low24h={`Lowest price ${crypto.low24h}`}
                change={formatPercentage(crypto.quote.quotes_percentChange24h)}
                showButton
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
