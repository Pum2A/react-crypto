import React, { useContext, lazy, Suspense, useState, useEffect } from "react";
import { CryptoContext } from "../../components/CryptoContext/CryptoContext";
import styles from "./Home.module.css";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";

// Lazy load the Crypto component
const Crypto = lazy(() => import("../../components/Crypto/Crypto"));

const Home = ({ searchQuery }) => {
  const { cryptoData, loading, error, favorites } = useContext(CryptoContext);
  const [randomCryptos, setRandomCryptos] = useState([]);
  const [remainingCryptos, setRemainingCryptos] = useState([]);
  const [filteredCryptos, setFilteredCryptos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [sortCriteria, setSortCriteria] = useState("default");

  const formatPercentage = (value) => {
    let numberValue = parseFloat(value);
    return `${numberValue.toFixed(2)}`;
  };

  useEffect(() => {
    if (cryptoData.length > 0) {
      let filtered = [...cryptoData];

      if (searchQuery) {
        if (filter === "highMarketCap") {
          filtered = filtered.sort((a, b) => b.market_cap - a.market_cap);
        } else if (filter === "lowMarketCap") {
          filtered = filtered.sort((a, b) => a.market_cap - b.market_cap);
        }

        if (sortCriteria === "priceAsc") {
          filtered = filtered.sort((a, b) => a.current_price - b.current_price);
        } else if (sortCriteria === "priceDesc") {
          filtered = filtered.sort((a, b) => b.current_price - a.current_price);
        }
      }

      setFilteredCryptos(filtered);
    }
  }, [cryptoData, filter, sortCriteria, searchQuery]);

  useEffect(() => {
    if (cryptoData.length > 0) {
      const shuffledCryptos = [...cryptoData].sort(() => 0.5 - Math.random());
      setRandomCryptos(shuffledCryptos.slice(0, 5));
      setRemainingCryptos(shuffledCryptos.slice(5));
    }
  }, [cryptoData]);

  useEffect(() => {
    if (searchQuery) {
      const filtered = cryptoData.filter(
        (crypto) =>
          crypto.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          crypto.symbol.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredCryptos(filtered);
    } else {
      setFilteredCryptos(cryptoData);
    }
  }, [searchQuery, cryptoData]);

  const handleLoadMore = () => {
    if (remainingCryptos.length > 0) {
      const newRandomCryptos = remainingCryptos.slice(0, 5);
      const updatedRemainingCryptos = remainingCryptos.slice(5);
      setRandomCryptos(newRandomCryptos);
      setRemainingCryptos(updatedRemainingCryptos);
    }
  };

  const handleSortChange = (criteria) => {
    setSortCriteria(criteria);
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

  const sortedByHigh = [...cryptoData].sort((a, b) => b.high_24h - a.high_24h);
  const top6Highest = sortedByHigh.slice(0, 5);

  const sortedByLow = [...cryptoData].sort((a, b) => a.low_24h - b.low_24h);
  const top6Lowest = sortedByLow.slice(0, 5);

  const sortedByPercentChange24h = [...cryptoData].sort(
    (a, b) => b.price_change_24h - a.price_change_24h
  );
  const top6Trending = sortedByPercentChange24h.slice(0, 5);

  console.log("Rendering Home component with favorites:", favorites);

  return (
    <>
      <div
        className={`${styles.homeGrid} ${
          searchQuery ? styles.homeGridSingleColumn : ""
        }`}>
        {searchQuery ? (
          <>
            {/* Display search results with filters */}
            <div className={styles.homeBlock}>
              <h2 className={styles.homeHeader}>Search Results</h2>
              <div className={styles.homeItems}>
                {filteredCryptos.length > 0 ? (
                  filteredCryptos.map((crypto) => (
                    <Suspense fallback={<div>Loading...</div>} key={crypto.id}>
                      <Crypto
                        market_cap_rank={crypto.market_cap_rank}
                        id={crypto.id}
                        name={crypto.name}
                        symbol={crypto.symbol}
                        image={crypto.image}
                        current_price={crypto.current_price}
                        price_change_24h={formatPercentage(
                          crypto.price_change_24h
                        )}
                      />
                    </Suspense>
                  ))
                ) : (
                  <div>No results found</div>
                )}
              </div>
            </div>

            {/* Filter and Sorting Options */}
            <div className={styles.homeOptions}>
              <div className={styles.homeOptionsGroup}>
                <div className={styles.homeSorting}>
                  <button onClick={() => handleSortChange("priceAsc")}>
                    Price Ascending
                  </button>
                  <button onClick={() => handleSortChange("priceDesc")}>
                    Price Descending
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Trending Now Block */}
            <div className={`${styles.homeBlock} ${styles.homeBlockTrending}`}>
              <h2 className={styles.homeHeader}>Trending Now</h2>
              <div className={styles.homeItems}>
                {top6Trending.map((crypto) => (
                  <Suspense fallback={<div>Loading...</div>} key={crypto.id}>
                    <Crypto
                      market_cap_rank={crypto.market_cap_rank}
                      id={crypto.id}
                      name={crypto.name}
                      symbol={crypto.symbol}
                      image={crypto.image}
                      current_price={crypto.current_price}
                      price_change_24h={formatPercentage(
                        crypto.price_change_24h
                      )}
                    />
                  </Suspense>
                ))}
              </div>
            </div>

            {/* Biggest Losses Block */}
            <div className={`${styles.homeBlock} ${styles.homeBlockLosers}`}>
              <h2 className={styles.homeHeader}>Biggest Losses</h2>
              <div className={styles.homeItems}>
                {top6Lowest.map((crypto) => (
                  <Suspense fallback={<div>Loading...</div>} key={crypto.id}>
                    <Crypto
                      market_cap_rank={crypto.market_cap_rank}
                      id={crypto.id}
                      name={crypto.name}
                      symbol={crypto.symbol}
                      image={crypto.image}
                      current_price={crypto.current_price}
                      price_change_24h={formatPercentage(
                        crypto.price_change_24h
                      )}
                    />
                  </Suspense>
                ))}
              </div>
            </div>

            {/* Random Cryptos Block */}
            <div className={`${styles.homeBlock} ${styles.homeBlockRandom}`}>
              <h2 className={styles.homeHeader}>Random Cryptos</h2>
              <div className={styles.homeItems}>
                {randomCryptos.map((crypto) => (
                  <Suspense fallback={<div>Loading...</div>} key={crypto.id}>
                    <Crypto
                      market_cap_rank={crypto.market_cap_rank}
                      id={crypto.id}
                      name={crypto.name}
                      symbol={crypto.symbol}
                      image={crypto.image}
                      current_price={crypto.current_price}
                      price_change_24h={formatPercentage(
                        crypto.price_change_24h
                      )}
                    />
                  </Suspense>
                ))}
              </div>
              {remainingCryptos.length > 0 && (
                <div className={styles.loadMoreBtnContainer}>
                  <UnfoldMoreIcon
                    onClick={handleLoadMore}
                    className={styles.loadMoreButton}
                  />
                </div>
              )}
            </div>

            {/* Your Favorites Block */}
            <div className={`${styles.homeBlock} ${styles.homeBlockFavorites}`}>
              <h2
                className={`${styles.homeHeader} ${styles.homeHeaderFavorites}`}>
                Your Favorites
              </h2>
              <div
                className={`${styles.homeItems} ${styles.homeItemsFavorites}`}>
                {favorites.map((crypto) => (
                  <Crypto
                    key={crypto.id}
                    market_cap_rank={crypto.market_cap_rank}
                    id={crypto.id}
                    name={crypto.name}
                    symbol={crypto.symbol}
                    image={crypto.image}
                    current_price={crypto.current_price}
                    price_change_24h={crypto.price_change_24h}
                  />
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Home;
