import React, { useContext } from "react";
import { CryptoContext } from "../CryptoContext/CryptoContext";
import "./Modal.css"; // Add your CSS styles for the modal here

const Modal = () => {
  const { isModalOpen, modalMessage, closeModal } = useContext(CryptoContext);

  if (!isModalOpen) return null;

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={closeModal}>
          &times;
        </button>
        <p>{modalMessage}</p>
      </div>
    </div>
  );
};

export default Modal;
