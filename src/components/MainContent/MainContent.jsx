import React, { Suspense, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Articles from "../../pages/Articles/Articles";
import Messages from "../../pages/Messages/Messages";
import MyList from "../../pages/MyList/MyList";
import Statistics from "../../pages/Statistics/Statistics";
import { CryptoProvider } from "../CryptoContext/CryptoContext";

const MainContent = () => {
  return (
    <div className="container" style={{ padding: "40px", flex: 1 }}>
      <Suspense fallback={<div>Loading...</div>}>
        <CryptoProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/mylist" element={<MyList />} />
            <Route path="/statistics" element={<Statistics />} />
          </Routes>
        </CryptoProvider>
      </Suspense>
    </div>
  );
};

export default MainContent;
