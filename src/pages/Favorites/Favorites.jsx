import React, { useContext, useState, useEffect } from "react";
import { CryptoContext } from "../../components/CryptoContext/CryptoContext";
import styles from "./Favorites.module.css";
import Legend from "../../components/Legend/Legend";
import Crypto from "../../components/Crypto/Crypto"; // Assuming this component exists

const Favorites = ({ searchQuery, onSearch }) => {
  const { favorites, cryptoData } = useContext(CryptoContext);
  const [filteredFavorites, setFilteredFavorites] = useState([]);

  useEffect(() => {
    if (searchQuery) {
      const filtered = favorites.filter(
        (crypto) =>
          crypto.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          crypto.symbol.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredFavorites(filtered);
    } else {
      setFilteredFavorites(favorites);
    }
  }, [searchQuery, favorites]);

  const formatPercentage = (value) => parseFloat(value).toFixed(2);

  return (
    <div className={styles.favoritesMain}>
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search favorites"
          value={searchQuery}
          onChange={(e) => onSearch(e.target.value)}
          className={styles.searchInput}
          onFocus={(e) => e.target.setAttribute("placeholder", "")}
          onBlur={(e) =>
            e.target.setAttribute("placeholder", "Search favorites")
          }
        />
      </div>
      <div className={styles.favoritesBlock}>
        <h2 className={styles.favoritesHeader}>Your Favorites</h2>
        <Legend />
        <div className={styles.favoritesItems}>
          {filteredFavorites.length > 0 ? (
            filteredFavorites.map((crypto) => (
              <Crypto
                key={crypto.id}
                market_cap_rank={crypto.market_cap_rank}
                id={crypto.id}
                name={crypto.name}
                symbol={crypto.symbol}
                image={crypto.image}
                current_price={crypto.current_price}
                price_change_24h={formatPercentage(crypto.price_change_24h)}
              />
            ))
          ) : (
            <div>No favorites found</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
