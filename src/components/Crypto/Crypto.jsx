import React from "react";

const Crypto = ({ id, name, price_usd }) => {
  return (
    <div className="item-container" key={id}>
      <div className="item">
        <div></div>
      </div>
      <div className="item-desc">
        <p>{name}</p>
        <p style={{ color: "#E9C46A" }}>{price_usd}$</p>
      </div>
    </div>
  );
};

export default Crypto;
