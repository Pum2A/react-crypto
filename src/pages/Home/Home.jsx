import React, { useContext, lazy, Suspense, useState, useEffect } from "react";
import { CryptoContext } from "../../components/CryptoContext/CryptoContext";
import styles from "./Home.module.css";
import ethLogo from "../../images/ethLogo.png";
import btc from "../../images/btc.png";
import icon from "../../images/icon.png";
import polygon from "../../images/polygon.jpg";
import tether from "../../images/tether.png";
// Lazy load the Crypto component
const Crypto = lazy(() => import("../../components/Crypto/Crypto"));

const Home = ({ searchQuery }) => {
  const { cryptoData, loading, error, favorites } = useContext(CryptoContext);
  const [randomCryptos, setRandomCryptos] = useState([]);
  const [remainingCryptos, setRemainingCryptos] = useState([]);
  const [filteredCryptos, setFilteredCryptos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [sortCriteria, setSortCriteria] = useState("default");
  const [activeSection, setActiveSection] = useState("trending"); // Added state for active section

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
      <div className={styles.homeMain}>
        <div className={styles.headerTextContainer}>
          <h1>Hi, Guest!</h1>
          <h2>Welcome back!</h2>
        </div>
        <div className={styles.gridContainer}>
          <div className={styles.col1}>
            <div className={styles.columnWrapper}>
              <div className={styles.columnContentContainer}>
                <div className={styles.columnContent}>
                  <h3>Join to Biggest Cryptocurrency Community!</h3>
                  <p>Join to our Community on Discord and Twitter</p>
                  <span>
                    <button>Discord</button>
                    <button>Twitter</button>
                  </span>
                </div>
                <div className={styles.columnImage}>
                  <img src={ethLogo} alt={ethLogo} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.col2}>
            <div className={styles.columnWrapper}>
              <div className={styles.columnSecondContentContainer}>
                <div className={styles.columnSecondContent}>
                  <div className={styles.columnHeaderContainer}>
                    <p>Premium Membership</p>
                  </div>
                  <div className={styles.columnPremiumMembership}>
                    <div className={styles.columnPremiumMembershipBlock}>
                      <span>Premium Status</span>{" "}
                      <div>
                        <span>9,99$ </span>/ per month
                      </div>
                      <button>Buy</button>
                    </div>
                    <div className={styles.columnPremiumMembershipBlock}>
                      <span>Vip Status</span>
                      <div>
                        <span>15,99$ </span>/ per month
                      </div>
                      <button>Buy</button>
                    </div>
                    <div className={styles.columnPremiumMembershipBlock}>
                      <span>Sponsor Status</span>
                      <div>
                        <span>19,99$ </span>/ per month
                      </div>
                      <button>Buy</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.col3}>
            <div className={styles.columnWrapper}>
              <div className={styles.columnSecondContentContainer}>
                <div className={`${styles.columnSecondContent} `}>
                  <div className={styles.columnHeaderContainer}>
                    <p className={styles.cryptoCurrencies}>
                      More than 50+ Cryptocurrencies!
                    </p>
                  </div>
                  <div className={styles.cryptoCurrenciesImages}>
                    <img src={btc} alt={btc} />
                    <img src={icon} alt={icon} />
                    <img src={polygon} alt={polygon} />
                    <img src={tether} alt={tether} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
