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
  const top6Highest = sortedByHigh.slice(0, 4);

  const sortedByLow = [...cryptoData].sort((a, b) => a.low24h - b.low24h);
  const top6Lowest = sortedByLow.slice(0, 4);

  const randomCryptos = [...cryptoData]
    .sort(() => 0.5 - Math.random())
    .slice(0, 7);

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
            {top6Trending.map((crypto) => (
              <Crypto
                key={crypto.name}
                rank={`${crypto.rank}`}
                id={crypto.id}
                name={crypto.name}
                logo={crypto.logo}
                high24h={`Highest price is: ${formatPercentage(
                  crypto.high24h
                )}`}
                low24h={`Lowest price is: ${crypto.low24h}`}
                change={`${formatPercentage(
                  crypto.quote.quotes_percentChange24h
                )}`}
              />
            ))}
          </div>
        </div>
        <div className="block border-top-losers">
          <h2>BIGGEST LOSSES</h2>
          <div className="items-container">
            {top6Lowest.map((crypto) => (
              <Crypto
                key={crypto.name}
                rank={`Currently rank is: ${crypto.rank}`}
                id={crypto.id}
                name={crypto.name}
                logo={crypto.logo}
                high24h={`Highest price is: ${formatPercentage(
                  crypto.high24h
                )}`}
                change={`${formatPercentageLost(
                  crypto.quote.quotes_percentChange24h
                )}`}
              />
            ))}
          </div>
        </div>
        <div className="block border-top-wins">
          <h2>BIGGEST WINS</h2>
          <div className="items-container">
            {top6Highest.map((crypto) => (
              <Crypto
                key={crypto.name}
                rank={`Currently rank is: ${crypto.rank}`}
                id={crypto.id}
                logo={crypto.logo}
                name={crypto.name}
                high24h={`Highest price is: ${formatPercentage(
                  crypto.high24h
                )}`}
                change={formatPercentage(crypto.quote.quotes_percentChange24h)}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="grid-second-container">
        <h2>RANDOM CRYPTOS</h2>
        <div className="block border-gradient">
          <div className="items-container-random">
            {randomCryptos.map((crypto) => (
              <Crypto
                rank={`Currently rank is: ${crypto.rank}`}
                key={crypto.name}
                id={crypto.id}
                name={crypto.name}
                logo={crypto.logo}
                high24h={`Highest price is: ${formatPercentage(
                  crypto.high24h
                )}`}
                low24h={`Lowest price is: ${crypto.low24h}`}
                change={formatPercentage(crypto.quote.quotes_percentChange24h)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
