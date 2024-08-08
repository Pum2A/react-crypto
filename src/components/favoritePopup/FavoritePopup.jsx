import React, { useEffect, useState } from "react";
import "./FavoritePopup.css";

const FavoritePopup = ({ message, isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  return isVisible && <div className="popup-notification">{message}</div>;
};

export default FavoritePopup;
