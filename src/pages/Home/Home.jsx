import React, { useContext, lazy, Suspense } from "react";
import { CryptoContext } from "../../components/CryptoContext/CryptoContext";
import "./Home.css";

// Lazy load the Crypto component
const Crypto = lazy(() => import("../../components/Crypto/Crypto"));

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
    .slice(0, 5);

  const sortedByPercentChange24h = [...cryptoData].sort(
    (a, b) => b.price_change_24h - a.price_change_24h
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
              <Suspense fallback={<div>Loading...</div>} key={crypto.name}>
                <Crypto
                  rank={`${crypto.rank}`}
                  id={crypto.id}
                  key={crypto.key}
                  symbol={crypto.symbol}
                  image={crypto.image}
                  high24h={`${formatPercentage(crypto.high24h)} $`}
                  low24h={`Lowest price ${crypto.low24h}`}
                  price_change_24h={`${formatPercentage(
                    crypto.price_change_24h
                  )}`}
                />
              </Suspense>
            ))}
          </div>
        </div>
        <div className="block border-gradient border-top-losers">
          <h2 className="header">BIGGEST LOSSES</h2>
          <div className="items-container">
            {top6Lowest.map((crypto) => (
              <Suspense fallback={<div>Loading...</div>} key={crypto.name}>
                <Crypto
                  rank={`${crypto.rank}`}
                  id={crypto.id}
                  key={crypto.key}
                  symbol={crypto.symbol}
                  image={crypto.image}
                  high24h={`${formatPercentage(crypto.high24h)} $`}
                  low24h={`Lowest price ${crypto.low24h}`}
                  price_change_24h={`${formatPercentageLost(
                    crypto.price_change_24h
                  )}`}
                  showButton={false}
                />
              </Suspense>
            ))}
          </div>
        </div>
        <div className="block border-gradient border-top-wins">
          <h2 className="header">BIGGEST WINS</h2>
          <div className="items-container">
            {top6Highest.map((crypto) => (
              <Suspense fallback={<div>Loading...</div>} key={crypto.name}>
                <Crypto
                  rank={`${crypto.rank}`}
                  id={crypto.id}
                  key={crypto.key}
                  symbol={crypto.symbol}
                  image={crypto.image}
                  high24h={`${formatPercentage(crypto.high24h)} $`}
                  low24h={`Lowest price ${crypto.low24h}`}
                  price_change_24h={formatPercentage(crypto.price_change_24h)}
                  showButton={false}
                />
              </Suspense>
            ))}
          </div>
        </div>
        <div className="block border-gradient">
          <h2 className="header">RANDOM CRYPTOS</h2>
          <div className="items-container">
            {randomCryptos.map((crypto) => (
              <Suspense fallback={<div>Loading...</div>} key={crypto.name}>
                <Crypto
                  rank={`${crypto.rank}`}
                  id={crypto.id}
                  key={crypto.key}
                  symbol={crypto.symbol}
                  image={crypto.image}
                  high24h={`${formatPercentage(crypto.high24h)} $`}
                  low24h={`Lowest price ${crypto.low24h}`}
                  price_change_24h={formatPercentage(crypto.price_change_24h)}
                />
              </Suspense>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
