import React, { createContext, useState, useEffect } from "react";

const CryptoContext = createContext();

const CryptoProvider = ({ children }) => {
  const [cryptoData, setCryptoData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [favorites, setFavorites] = useState([]);

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalColor, setModalColor] = useState("transparent");

  // Fetch crypto data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false",
          {
            method: "GET",
            headers: {
              accept: "application/json",
              "x-cg-demo-api-key": "CG-n22mrDz3LvU7NunHbKNJap5K",
            },
          }
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
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Add a favorite
  const addFavorite = (crypto) => {
    setFavorites((prevFavorites) => {
      if (!prevFavorites.some((fav) => fav.id === crypto.id)) {
        setModalMessage(`${crypto.name} has been added to favorites`);
        setModalColor("green"); // Set color for added
        setIsModalOpen(true);
        return [...prevFavorites, crypto];
      }
      return prevFavorites;
    });
  };

  // Remove a favorite
  const removeFavorite = (cryptoId) => {
    setFavorites((prevFavorites) => {
      const updatedFavorites = prevFavorites.filter(
        (fav) => fav.id !== cryptoId
      );
      const removedCrypto = prevFavorites.find((fav) => fav.id === cryptoId);
      if (removedCrypto) {
        setModalMessage(
          `${removedCrypto.name} has been removed from favorites`
        );
        setModalColor("red"); // Set color for removed
        setIsModalOpen(true);
      }
      return updatedFavorites;
    });
  };

  const isFavorite = (cryptoId) => {
    return favorites.some((fav) => fav.id === cryptoId);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalMessage("");
    setModalColor("transparent");
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
        isModalOpen,
        modalMessage,
        modalColor,
        closeModal,
      }}>
      {children}
    </CryptoContext.Provider>
  );
};

export { CryptoContext, CryptoProvider };
