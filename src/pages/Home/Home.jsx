import React, { useContext, lazy, Suspense, useState, useEffect } from "react";
import { CryptoContext } from "../../components/CryptoContext/CryptoContext";
import "./Home.css";
import Topbar from "../../components/Topbar/Topbar";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";

// Lazy load the Crypto component
const Crypto = lazy(() => import("../../components/Crypto/Crypto"));

const Home = () => {
  const { cryptoData, loading, error, favorites } = useContext(CryptoContext);
  const [randomCryptos, setRandomCryptos] = useState([]);
  const [remainingCryptos, setRemainingCryptos] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCryptos, setFilteredCryptos] = useState([]);

  const formatPercentage = (value) => {
    let numberValue = parseFloat(value);
    return `${numberValue.toFixed(2)}`;
  };

  useEffect(() => {
    if (cryptoData.length > 0) {
      // Shuffle and set the initial random cryptos and the remaining cryptos
      const shuffledCryptos = [...cryptoData].sort(() => 0.5 - Math.random());
      setRandomCryptos(shuffledCryptos.slice(0, 5));
      setRemainingCryptos(shuffledCryptos.slice(5));
    }
  }, [cryptoData]);

  useEffect(() => {
    // Filter the cryptocurrencies based on the search query
    if (searchQuery) {
      const filtered = cryptoData.filter(
        (crypto) =>
          crypto.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          crypto.symbol.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredCryptos(filtered);
    } else {
      setFilteredCryptos(cryptoData); // Display all if no search query
    }
  }, [searchQuery, cryptoData]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleLoadMore = () => {
    if (remainingCryptos.length > 0) {
      const newRandomCryptos = remainingCryptos.slice(0, 5);
      const updatedRemainingCryptos = remainingCryptos.slice(5);
      setRandomCryptos(newRandomCryptos);
      setRemainingCryptos(updatedRemainingCryptos);
    }
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
      <Topbar onSearch={handleSearch} />

      <div className="home__grid">
        {searchQuery ? (
          // Display search results if there's a query
          <div className="home__block">
            <h2 className="home__header">Search Results</h2>
            <div className="home__items">
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
        ) : (
          <>
            {/* Trending Now Block */}
            <div className="home__block home__block--trending">
              <h2 className="home__header">Trending Now</h2>
              <div className="home__items">
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
            <div className="home__block home__block--losers">
              <h2 className="home__header">Biggest Losses</h2>
              <div className="home__items">
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
            <div className="home__block home__block--random">
              <h2 className="home__header">Random Cryptos</h2>
              <div className="home__items">
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
                <>
                  <div className="load-more-btn-container">
                    <UnfoldMoreIcon
                      onClick={handleLoadMore}
                      className="load-more-button"
                    />
                  </div>
                </>
              )}
            </div>

            {/* Your Favorites Block */}
            <div className="home__block home__block--favorites">
              <h2 className="home__header home__header--favorites">
                Your Favorites
              </h2>
              <div className="home__items home__items--favorites">
                {favorites.map((crypto) => (
                  <Crypto
                    key={crypto.id} // Use crypto.id as the key
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
