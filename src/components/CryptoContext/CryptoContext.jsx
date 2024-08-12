import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const CryptoContext = createContext();

const CryptoProvider = ({ children }) => {
  const [cryptoData, setCryptoData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const showPopup = (message) => {
    setPopupMessage(message);
    setPopupVisible(true);
    setTimeout(() => {
      setPopupVisible(false);
    }, 3000);
  };

  // Fetch crypto data from API
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

  useEffect(() => {
    const savedFavorites = localStorage.getItem("favorites");
    if (savedFavorites) {
      const parsedFavorites = JSON.parse(savedFavorites);
      if (parsedFavorites.length && favorites.length === 0) {
        setFavorites(parsedFavorites);
      }
    } else {
      console.log("No favorites found in localStorage.");
    }
  }, []);

  useEffect(() => {
    console.log("Favorites updated:", favorites);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Add a favorite
  const addFavorite = (crypto) => {
    setFavorites((prevFavorites) => [...prevFavorites, crypto]);
  };

  // Remove a favorite
  const removeFavorite = (cryptoId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((fav) => fav.id !== cryptoId)
    );
  };

  const isFavorite = (cryptoId) => {
    return favorites.some((fav) => fav.id === cryptoId);
  };

  return (
    <CryptoContext.Provider
      value={{
        cryptoData,
        loading,
        error,
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite,
        showPopup,
        popupVisible,
        popupMessage,
      }}>
      {children}
    </CryptoContext.Provider>
  );
};

export { CryptoContext, CryptoProvider };
