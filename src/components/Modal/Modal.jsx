import React, { useContext } from "react";
import { CryptoContext } from "../CryptoContext/CryptoContext";
import "./Modal.css";
import CloseIcon from "@mui/icons-material/Close";
const Modal = () => {
  const { isModalOpen, modalMessage, modalColor, closeModal } =
    useContext(CryptoContext);

  if (!isModalOpen) return null;

  return (
    <div
      className="modal-overlay"
      style={{ backgroundColor: modalColor }} // Use the modalColor here
      onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <p>{modalMessage}</p>

        <CloseIcon className="modal-close" onClick={closeModal} />
      </div>
    </div>
  );
};

export default Modal;
