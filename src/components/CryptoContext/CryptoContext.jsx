import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const CryptoContext = createContext();

const CryptoProvider = ({ children }) => {
  const [cryptoData, setCryptoData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          "x-cg-demo-api-key": "CG-n22mrDz3LvU7NunHbKNJap5K",
        },
      };

      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false",
          options
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        console.log("API Response:", data);
        setCryptoData(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setCryptoData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <CryptoContext.Provider value={{ cryptoData, loading, error }}>
      {children}
    </CryptoContext.Provider>
  );
};

export { CryptoContext, CryptoProvider };
