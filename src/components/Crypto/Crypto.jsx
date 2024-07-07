import React from "react";

const Crypto = ({ name, price_usd, percent_change_24h }) => {
  const changeColor = percent_change_24h >= 0 ? "green" : "red";

  return (
    <div className="item-container">
      <div className="item">
        <div></div>
      </div>
      <div className="item-desc">
        <p>{name}</p>
        <p style={{ color: "#E9C46A" }}>{price_usd}$</p>
        <p style={{ color: changeColor }}>{percent_change_24h}%</p>
      </div>
    </div>
  );
};

export default Crypto;
