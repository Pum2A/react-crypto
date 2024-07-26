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
      <h1 className="home__title">HOME</h1>
      <div className="home__grid">
        <div className="home__block home__block--trending">
          <h2 className="home__header">TRENDING NOW</h2>
          <div className="home__items">
            {top6Trending.map((crypto, index) => (
              <Suspense fallback={<div>Loading...</div>} key={crypto.id}>
                <Crypto
                  market_cap_rank={`${crypto.market_cap_rank}`}
                  id={crypto.id}
                  symbol={crypto.symbol}
                  image={crypto.image}
                  current_price={crypto.current_price}
                  price_change_24h={`${formatPercentage(
                    crypto.price_change_24h
                  )}`}
                />
              </Suspense>
            ))}
          </div>
        </div>
        <div className="home__block home__block--losers">
          <h2 className="home__header">BIGGEST LOSSES</h2>
          <div className="home__items">
            {top6Lowest.map((crypto) => (
              <Suspense fallback={<div>Loading...</div>} key={crypto.id}>
                <Crypto
                  market_cap_rank={`${crypto.market_cap_rank}`}
                  id={crypto.id}
                  symbol={crypto.symbol}
                  image={crypto.image}
                  current_price={crypto.current_price}
                  price_change_24h={`${formatPercentage(
                    crypto.price_change_24h
                  )}`}
                />
              </Suspense>
            ))}
          </div>
        </div>
        <div className="home__block home__block--wins">
          <h2 className="home__header">BIGGEST WINS</h2>
          <div className="home__items">
            {top6Highest.map((crypto) => (
              <Suspense fallback={<div>Loading...</div>} key={crypto.id}>
                <Crypto
                  market_cap_rank={`${crypto.market_cap_rank}`}
                  id={crypto.id}
                  symbol={crypto.symbol}
                  image={crypto.image}
                  current_price={crypto.current_price}
                  price_change_24h={`${formatPercentage(
                    crypto.price_change_24h
                  )}`}
                />
              </Suspense>
            ))}
          </div>
        </div>
        <div className="home__block home__block--random">
          <h2 className="home__header">RANDOM CRYPTOS</h2>
          <div className="home__items">
            {randomCryptos.map((crypto) => (
              <Suspense fallback={<div>Loading...</div>} key={crypto.id}>
                <Crypto
                  market_cap_rank={`${crypto.market_cap_rank}`}
                  id={crypto.id}
                  symbol={crypto.symbol}
                  image={crypto.image}
                  current_price={crypto.current_price}
                  price_change_24h={`${formatPercentage(
                    crypto.price_change_24h
                  )}`}
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
