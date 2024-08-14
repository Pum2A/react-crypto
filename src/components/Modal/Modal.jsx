import React, { useContext } from "react";
import { CryptoContext } from "../CryptoContext/CryptoContext";
import styles from "./Modal.module.css"; // Importing the CSS Module
import CloseIcon from "@mui/icons-material/Close";

const Modal = () => {
  const { isModalOpen, modalMessage, modalColor, closeModal } =
    useContext(CryptoContext);

  if (!isModalOpen) return null;

  return (
    <div
      className={styles.modalOverlay}
      style={{ backgroundColor: modalColor }} // Use the modalColor here
      onClick={closeModal}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <p>{modalMessage}</p>
        <CloseIcon className={styles.modalClose} onClick={closeModal} />
      </div>
    </div>
  );
};

export default Modal;
