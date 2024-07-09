import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const CryptoContext = createContext();

const CryptoProvider = ({ children }) => {
  const [cryptoData, setCryptoData] = useState([]); // Initial state is an empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://cryptocurrency-markets.p.rapidapi.com/v1/crypto/coins?page=1",
          {
            headers: {
              "x-rapidapi-host": "cryptocurrency-markets.p.rapidapi.com",
              "x-rapidapi-key":
                "c385c9b574mshbc03521ee35dcbbp13d783jsn006ee8acd396", // Replace with your actual RapidAPI key
            },
          }
        );

        console.log("API Response:", response.data); // Log the full response for debugging

        // Convert the data object into an array
        const dataArray = Object.values(response.data.data);

        setCryptoData(dataArray); // Adjust according to the API's response structure
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
