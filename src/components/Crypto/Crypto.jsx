import React, { useContext } from "react";
import { CryptoContext } from "../../components/CryptoContext/CryptoContext";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import FavoritePopup from "../favoritePopup/FavoritePopup";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { useState } from "react";
import "./Crypto.css";
const Crypto = ({
  id,
  name,
  symbol,
  image,
  current_price,
  high_24h,
  low_24h,
  market_cap_rank,
  price_change_24h,
}) => {
  const { addFavorite, removeFavorite, isFavorite } = useContext(CryptoContext);
  const [popupVisible, setPopupVisible] = useState(false);
  const favorite = isFavorite(id);

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    if (favorite) {
      removeFavorite(id);
    } else {
      addFavorite({
        id,
        name,
        symbol,
        image,
        current_price,
        high_24h,
        low_24h,
        market_cap_rank,
        price_change_24h,
      });
      setPopupVisible(true);
    }
  };

  return (
    <>
      <Link to={`/crypto/${id}`}>
        <div className="crypto">
          <div className="crypto__rank">{market_cap_rank}</div>
          <div className="crypto__image">
            <img src={image} alt={`${symbol} logo`} />
          </div>
          <div className="crypto__info">
            <div className="crypto__symbol">{symbol.toUpperCase()}</div>
            <div className="crypto__price">{current_price}$</div>
            <div
              className={`crypto__change ${
                price_change_24h >= 0
                  ? "crypto__change--positive"
                  : "crypto__change--negative"
              }`}>
              {price_change_24h}%
            </div>
          </div>
          <button onClick={handleFavoriteClick} className="favorite-button">
            {favorite ? (
              <StarIcon style={{ fontSize: 36, color: "orange" }} />
            ) : (
              <StarBorderIcon style={{ fontSize: 36, color: "yellow" }} />
            )}
          </button>
        </div>
      </Link>
      <FavoritePopup
        message={`${name} has been added to your favorites!`}
        isVisible={popupVisible}
        onClose={() => setPopupVisible(false)}
      />
    </>
  );
};

export default Crypto;
