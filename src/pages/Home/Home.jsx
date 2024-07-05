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
    // Dodaj warunek sprawdzający, czy cryptoData istnieje
    return <div>No data available</div>;
  }

  const limitedCryptoData = cryptoData.slice(0, 6);
  const moreLimitedCryptoData = cryptoData.slice(0, 12);

  return (
    <>
      <h1>HOME</h1>
      <div className="grid-container">
        <div className="block" style={{ border: "13px solid #E9C46A" }}>
          <h2>TRENDING NOW</h2>
          <div className="items-container">
            {limitedCryptoData.map((crypto) => (
              <Crypto
                key={crypto.id}
                id={crypto.id}
                name={crypto.name}
                price_usd={crypto.price_usd}
              />
            ))}
          </div>
        </div>
        <div className="block" style={{ border: "13px solid #FF2E63" }}>
          <h2>BIGGEST LOSTS</h2>
          <div className="items-container">
            {limitedCryptoData.map((crypto) => (
              <Crypto
                key={crypto.id}
                id={crypto.id}
                name={crypto.name}
                price_usd={crypto.price_usd}
              />
            ))}
          </div>
        </div>
        <div className="block" style={{ border: "13px solid #36BA98" }}>
          <h2>BIGGEST WINS</h2>
          <div className="items-container">
            {limitedCryptoData.map((crypto) => (
              <Crypto
                key={crypto.id}
                id={crypto.id}
                name={crypto.name}
                price_usd={crypto.price_usd}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="grid-second-container">
        <div
          className="block"
          style={{ height: "300px", border: "13px solid green" }}>
          <div className="items-container">
            <div className="item-container">
              <div className="items-container">
                {moreLimitedCryptoData.map((crypto) => (
                  <Crypto
                    key={crypto.id}
                    id={crypto.id}
                    name={crypto.name}
                    price_usd={crypto.price_usd}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
