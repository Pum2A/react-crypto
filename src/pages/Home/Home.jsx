import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <>
      <h1>HOME</h1>
      <div className="grid-container">
        <div className="block" style={{ border: "1px solid #E9C46A" }}>
          <h2>TRENDING NOW</h2>
          <div className="items-container">
            <div className="item-container">
              <div className="item">
                <div></div>
              </div>
              <div className="item-desc">
                <p>BITCOIN</p>
                <p style={{ color: "#E9C46A" }}>2.54$</p>
              </div>
            </div>
            <div className="item-container">
              <div className="item">
                <div></div>
              </div>
              <div className="item-desc">
                <p>BITCOIN</p>
                <p style={{ color: "#E9C46A" }}>2.54$</p>
              </div>
            </div>
            <div className="item-container">
              <div className="item">
                <div></div>
              </div>
              <div className="item-desc">
                <p>BITCOIN</p>
                <p style={{ color: "#E9C46A" }}>2.54$</p>
              </div>
            </div>
            <div className="item-container">
              <div className="item">
                <div></div>
              </div>
              <div className="item-desc">
                <p>BITCOIN</p>
                <p style={{ color: "#E9C46A" }}>2.54$</p>
              </div>
            </div>
            <div className="item-container">
              <div className="item">
                <div></div>
              </div>
              <div className="item-desc">
                <p>BITCOIN</p>
                <p style={{ color: "#E9C46A" }}>2.54$</p>
              </div>
            </div>
          </div>
        </div>
        <div className="block" style={{ border: "1px solid #FF2E63" }}>
          <h2>BIGGEST LOSTS</h2>
          <div className="item">
            <div></div>
          </div>
          <div className="item-desc">
            <p>BITCOIN</p>
            <p style={{ color: "#FF2E63" }}>2.54$</p>
          </div>
        </div>
        <div className="block" style={{ border: "1px solid #36BA98" }}>
          <h2>BIGGEST WINS</h2>
          <div className="item">
            <div></div>
          </div>
          <div className="item-desc">
            <p>BITCOIN</p>
            <p style={{ color: "#36BA98" }}>2.54$</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
