import React from "react";

const Crypto = ({ name, price, change }) => {
  const changeColor = change >= 0 ? "green" : "red";

  return (
    <div className="item-container">
      <div className="item">
        <div></div>
      </div>
      <div className="item-desc">
        <p>{name}</p>
        <p style={{ color: "#E9C46A" }}>{price}$</p>
        <p style={{ color: changeColor }}>{change}%</p>
      </div>
    </div>
  );
};

export default Crypto;
