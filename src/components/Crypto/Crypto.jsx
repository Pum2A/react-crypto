import React from "react";

const Crypto = ({ name, change, symbol, high24h, low24h, logo }) => {
  const changeColor = change >= 0 ? "green" : "red";

  return (
    <div className="item-container">
      <div className="item">
        <img src={logo} alt={`${name} logo`} />
      </div>
      <div className="item-desc">
        <p>{name}</p>
        <p>{symbol}</p>
        <p>{high24h}</p>
        <p>{low24h}</p>
        <p style={{ color: changeColor }}>{change}%</p>
      </div>
    </div>
  );
};

export default Crypto;
