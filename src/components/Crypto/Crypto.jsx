import React, { useContext, useState } from "react";
import { CryptoContext } from "../../components/CryptoContext/CryptoContext";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import styles from "./Crypto.module.css"; // Importing the CSS Module
import Modal from "../Modal/Modal";
import Legend from "../Legend/Legend";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
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

    setIsModalOpen(true);
  };

  return (
    <>
      <Link to={`/crypto/${id}`}>
        <div className={styles.crypto}></div>
        <div className={styles.cryptoContent}>
          <div className={styles.cryptoHeader}>
            <div className={styles.crypto__text}>
              {name} ({symbol.toUpperCase()})
            </div>
            <div className={styles.crypto__image}>
              <img src={image} alt={`${symbol} logo`} />
            </div>
            <div className={styles.crypto__rank__container}>
              <div className={styles.crypto__rank}>{market_cap_rank}</div>
            </div>

            <div className={styles.crypto__price}>{current_price}$</div>
            <div
              className={`${styles.crypto__change} ${
                price_change_24h >= 0
                  ? styles.crypto__change__positive
                  : styles.crypto__change__negative
              }`}>
              {price_change_24h}%
            </div>
            <div className={styles.favoriteButtonContainer}>
              <button
                onClick={handleFavoriteClick}
                className={styles.favoriteButton}>
                {favorite ? (
                  <Favorite style={{ fontSize: 25 }} />
                ) : (
                  <FavoriteBorder style={{ fontSize: 25 }} />
                )}
              </button>
            </div>
          </div>
        </div>
      </Link>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <p>{modalMessage}</p>
      </Modal>
    </>
  );
};

export default Crypto;
