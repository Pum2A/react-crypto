import React, { useContext, useState } from "react";
import { CryptoContext } from "../../components/CryptoContext/CryptoContext";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import styles from "./Crypto.module.css"; // Importing the CSS Module
import Modal from "../Modal/Modal";

const Crypto = ({
  id,
  name,
  symbol,
  image,
  current_price,
  market_cap_rank,
  price_change_24h,
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
        <div className={styles.crypto}>
          {" "}
          {/* Apply the scoped class */}
          <div className={styles.crypto__rank}>{market_cap_rank}</div>
          <div className={styles.crypto__image}>
            <img src={image} alt={`${symbol} logo`} />
          </div>
          <div className={styles.crypto__info}>
            <div className={styles.crypto__symbol}>{symbol.toUpperCase()}</div>
            <div className={styles.crypto__price}>{current_price}$</div>
            <div
              className={`${styles.crypto__change} ${
                price_change_24h >= 0
                  ? styles.crypto__change__positive
                  : styles.crypto__change__negative
              }`}>
              {price_change_24h}%
            </div>
          </div>
          <button
            onClick={handleFavoriteClick}
            className={styles.favoriteButton}>
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
