import React, { useContext, useState, useEffect } from "react";
import { CryptoContext } from "../../components/CryptoContext/CryptoContext";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import "./Crypto.css";
import Modal from "../Modal/Modal";
const Crypto = ({
  id,
  name,
  symbol,
  image,
  current_price,
  market_cap_rank,
  price_change_24h,
  popupVisible,
}) => {
  const { addFavorite, removeFavorite, isFavorite } = useContext(CryptoContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const favorite = isFavorite(id);

  const handleFavoriteClick = (e) => {
    e.preventDefault();

    if (favorite) {
      removeFavorite(id);
      setModalMessage(`${name} has been removed from favorites`);
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
      setModalMessage(`${name} has been added to favorites`);
    }

    // Log the message for debugging
    console.log("Updated Message:", modalMessage);

    // Open the modal after updating the message
    setIsModalOpen(true);
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
              <StarIcon style={{ fontSize: 25 }} />
            ) : (
              <StarBorderIcon style={{ fontSize: 25 }} />
            )}
          </button>
        </div>
      </Link>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <p>{modalMessage}</p>
      </Modal>
    </>
  );
};

export default Crypto;
