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

  if (!cryptoData) {
    return <div>No data available</div>;
  }

  const topGainers = cryptoData
    .slice()
    .sort(
      (a, b) =>
        parseFloat(b.percent_change_24h) - parseFloat(a.percent_change_24h)
    )
    .slice(0, 6);

  const topLosers = cryptoData
    .slice()
    .sort(
      (a, b) =>
        parseFloat(a.percent_change_24h) - parseFloat(b.percent_change_24h)
    )
    .slice(0, 6);

  const topWins = cryptoData
    .slice()
    .sort(
      (a, b) =>
        parseFloat(b.percent_change_24h) - parseFloat(a.percent_change_24h)
    )
    .slice(0, 6);

  const randomCryptos = cryptoData.slice(0, 12);

  return (
    <>
      <h1>HOME</h1>
      <div className="grid-container">
        <div className="block" style={{ border: "13px solid #E9C46A" }}>
          <h2>TRENDING NOW</h2>
          <div className="items-container">
            {topGainers.map((crypto) => (
              <Crypto
                key={crypto.id}
                id={crypto.id}
                name={crypto.name}
                price_usd={crypto.price_usd}
                percent_change_24h={crypto.percent_change_24h}
              />
            ))}
          </div>
        </div>
        <div className="block" style={{ border: "13px solid #FF2E63" }}>
          <h2>BIGGEST LOSSES</h2>
          <div className="items-container">
            {topLosers.map((crypto) => (
              <Crypto
                key={crypto.id}
                id={crypto.id}
                name={crypto.name}
                price_usd={crypto.price_usd}
                percent_change_24h={crypto.percent_change_24h}
              />
            ))}
          </div>
        </div>
        <div className="block" style={{ border: "13px solid #36BA98" }}>
          <h2>BIGGEST WINS</h2>
          <div className="items-container">
            {topWins.map((crypto) => (
              <Crypto
                key={crypto.id}
                id={crypto.id}
                name={crypto.name}
                price_usd={crypto.price_usd}
                percent_change_24h={crypto.percent_change_24h}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="grid-second-container">
        <div
          className="block"
          style={{ height: "300px", border: "13px solid green" }}>
          <h2>RANDOM CRYPTOS</h2>
          <div className="items-container">
            {randomCryptos.map((crypto) => (
              <Crypto
                key={crypto.id}
                id={crypto.id}
                name={crypto.name}
                price_usd={crypto.price_usd}
                percent_change_24h={crypto.percent_change_24h}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
