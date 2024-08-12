import React, { useContext, useState } from "react";
import { CryptoContext } from "../../components/CryptoContext/CryptoContext";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import FavoritePopup from "../favoritePopup/FavoritePopup";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import "./Crypto.css";

const Crypto = ({
  id,
  name,
  symbol,
  image,
  current_price,
  market_cap_rank,
  price_change_24h,
}) => {
  const {
    addFavorite,
    removeFavorite,
    isFavorite,
    showPopup,
    popupVisible,
    popupMessage,
  } = useContext(CryptoContext);
  const favorite = isFavorite(id);

  const handleFavoriteClick = (e) => {
    e.preventDefault();

    if (favorite) {
      removeFavorite(id);
      showPopup(`${name} has been removed from your favorites!`);
    } else {
      addFavorite({
        id,
        name,
        symbol,
        image,
        current_price,
        market_cap_rank,
        price_change_24h,
      });
      showPopup(`${name} has been added to your favorites!`);
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
      <FavoritePopup message={popupMessage} isVisible={popupVisible} />
    </>
  );
};

export default Crypto;
