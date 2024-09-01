import React, { useContext, lazy, Suspense, useState, useEffect } from "react";
import { CryptoContext } from "../../components/CryptoContext/CryptoContext";
import styles from "./Home.module.css";
import ethLogo from "../../images/ethLogo.png";
import btc from "../../images/btc.png";
import icon from "../../images/icon.png";
import polygon from "../../images/polygon.jpg";
import tether from "../../images/tether.png";
import ImageSlider from "../../components/ImageSlider/ImageSlider";

const Crypto = lazy(() => import("../../components/Crypto/Crypto"));

const Home = ({ searchQuery }) => {
  const { cryptoData, loading, error, favorites } = useContext(CryptoContext);
  const [randomCryptos, setRandomCryptos] = useState([]);
  const [remainingCryptos, setRemainingCryptos] = useState([]);
  const [filteredCryptos, setFilteredCryptos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [sortCriteria, setSortCriteria] = useState("default");

  const logoUrls = cryptoData.map((crypto) => crypto.image);
  const imageNames = cryptoData.map((crypto) => crypto.symbol);

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
        <div className={styles.flexContainer}>
          <div className={styles.flexItemOrange}>
            <div className={styles.columnContent}>
              <div className={styles.headerContainerMessage}>
                <h1>CRX</h1>
                <div className={styles.headerMessage}>
                  <p>Welcome to our site!</p>
                  <p>World of Cryptocurrency.</p>
                  <p>
                    Explore our resources, join our community, and take your
                    crypto knowledge to the next level.
                  </p>
                </div>
              </div>

              <div className={styles.columnTextContent}>
                <h3>WORLDWIDE CRYPTOCURRENCY CONTENT</h3>
                <div className={styles.communityContainer}>
                  <p>Our Community on Discord and Twitter</p>
                  <span>
                    <button>Discord</button>
                    <button>Twitter</button>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.flexItemGray}>
            <div className={styles.columnSecondContent}>
              <div className={styles.columnHeaderContainer}>
                <p>Membership</p>
              </div>
              <div className={styles.columnPremiumMembership}>
                <div className={styles.columnPremiumMembershipBlock}>
                  <div className={styles.columnPremiumMembershipName}>
                    <span>Premium </span>
                  </div>
                  <div className={styles.columnPremiumMembershipPrice}>
                    <span>$9.99</span>
                  </div>
                  <div className={styles.columnPremiumMembershipBtnContainer}>
                    <button>Buy</button>
                  </div>
                </div>
                <div className={styles.columnPremiumMembershipBlock}>
                  <div className={styles.columnPremiumMembershipName}>
                    <span>VIP </span>
                  </div>
                  <div className={styles.columnPremiumMembershipPrice}>
                    <span>$15.99</span>
                  </div>
                  <div className={styles.columnPremiumMembershipBtnContainer}>
                    <button>Buy</button>
                  </div>
                </div>
                <div className={styles.columnPremiumMembershipBlock}>
                  <div className={styles.columnPremiumMembershipName}>
                    <span>Sponsor </span>
                  </div>
                  <div className={styles.columnPremiumMembershipPrice}>
                    <span>$19.99</span>
                  </div>
                  <div className={styles.columnPremiumMembershipBtnContainer}>
                    <button>Buy</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.flexItemGray}>
            <div className={styles.columnSecondContent}>
              <div className={styles.columnHeaderContainer}>
                <p className={styles.cryptoCurrencies}>Cryptocurrencies</p>
              </div>

              <div className={styles.cryptoCurrenciesImages}>
                <ImageSlider imageUrls={logoUrls} imageNames={imageNames} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
