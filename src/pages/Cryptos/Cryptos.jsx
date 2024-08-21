import React, { useContext, lazy, Suspense, useState, useEffect } from "react";
import { CryptoContext } from "../../components/CryptoContext/CryptoContext";
import styles from "./Cryptos.module.css";
import Legend from "../../components/Legend/Legend";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
const Crypto = lazy(() => import("../../components/Crypto/Crypto"));

const Cryptos = ({ searchQuery, onSearch }) => {
  const { cryptoData, loading, error } = useContext(CryptoContext);
  const [filteredCryptos, setFilteredCryptos] = useState([]);
  const [activeSection, setActiveSection] = useState("trending");

  useEffect(() => {
    if (cryptoData.length > 0) {
      const filtered = searchQuery
        ? cryptoData.filter(
            (crypto) =>
              crypto.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              crypto.symbol.toLowerCase().includes(searchQuery.toLowerCase())
          )
        : cryptoData;

      setFilteredCryptos(filtered);
    }
  }, [cryptoData, searchQuery]);

  const formatPercentage = (value) => parseFloat(value).toFixed(2);

  const getSortedCryptos = (key, order = "desc", limit = 5) => {
    const sorted = [...cryptoData].sort((a, b) =>
      order === "asc" ? a[key] - b[key] : b[key] - a[key]
    );
    return sorted.slice(0, limit);
  };

  const sections = {
    trending: getSortedCryptos("price_change_24h"),
    winners: getSortedCryptos("high_24h"),
    losers: getSortedCryptos("low_24h", "asc"),
    random: cryptoData.sort(() => 0.5 - Math.random()).slice(0, 5),
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (cryptoData.length === 0) return <div>No data available</div>;

  return (
    <div className={styles.cryptosMain}>
      <Section
        title={
          searchQuery
            ? "Search Results"
            : activeSection.charAt(0).toUpperCase() + activeSection.slice(1)
        }
        cryptos={searchQuery ? filteredCryptos : sections[activeSection]}
        formatPercentage={formatPercentage}
        setActiveSection={setActiveSection}
        searchQuery={searchQuery} // Pass searchQuery here
        onSearch={onSearch}
      />
    </div>
  );
};

const Section = ({
  title,
  cryptos,
  formatPercentage,
  setActiveSection,
  searchQuery,
  onSearch,
}) => (
  <div className={styles.cryptosBlock}>
    <h2 className={styles.cryptosHeader}>{title}</h2>
    <Legend />

    <div className={styles.sectionControls}>
      <button onClick={() => setActiveSection("trending")}>Trending</button>
      <button onClick={() => setActiveSection("winners")}>Winners</button>
      <div className={styles.searchContainer}>
        <SearchIcon className={styles.searchIcon} />
        <input
          type="text"
          placeholder="Search cryptos"
          value={searchQuery}
          onChange={(e) => onSearch(e.target.value)}
          onFocus={(e) => e.target.setAttribute("placeholder", "")}
          onBlur={(e) => e.target.setAttribute("placeholder", "Search cryptos")}
          className={styles.searchInput}
        />
        {searchQuery && (
          <CloseIcon
            className={styles.clearIcon}
            onClick={() => onSearch("")}
          />
        )}
      </div>
      <button onClick={() => setActiveSection("losers")}>Losers</button>
      <button onClick={() => setActiveSection("random")}>Random</button>
    </div>
    <div className={styles.cryptosItems}>
      {cryptos.length > 0 ? (
        cryptos.map((crypto) => (
          <Suspense fallback={<div>Loading...</div>} key={crypto.id}>
            <Crypto
              market_cap_rank={crypto.market_cap_rank}
              id={crypto.id}
              name={crypto.name}
              symbol={crypto.symbol}
              image={crypto.image}
              current_price={crypto.current_price}
              price_change_24h={formatPercentage(crypto.price_change_24h)}
            />
          </Suspense>
        ))
      ) : (
        <div>No results found</div>
      )}
    </div>
  </div>
);

export default Cryptos;
