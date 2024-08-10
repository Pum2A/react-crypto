import React, { useEffect } from "react";
import "./FavoritePopup.css";

const FavoritePopup = ({ message, isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000); // Adjust this timeout if needed
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]); // Make sure the dependency array is correct

  return isVisible ? <div className="popup-notification">{message}</div> : null;
};

export default FavoritePopup;
