import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const CryptoContext = createContext();

const CryptoProvider = ({ children }) => {
  const [cryptoData, setCryptoData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://cors-anywhere.herokuapp.com/https://api.coingecko.com/api/v3/coins/markets",
          {
            params: {
              vs_currency: "usd",
              order: "market_cap_desc",
              per_page: 100,
              page: 1,
              sparkline: false,
            },
          }
        );

        console.log("API Response:", response.data);
        setCryptoData(response.data);
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
