import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { CryptoProvider } from "../CryptoContext/CryptoContext";
import CryptoDetails from "../CryptoDetails/CryptoDetails";
import "./MainContent.css";

const Home = lazy(() => import("../../pages/Home/Home"));
const Articles = lazy(() => import("../../pages/Articles/Articles"));
const Messages = lazy(() => import("../../pages/Messages/Messages"));
const MyList = lazy(() => import("../../pages/MyList/MyList"));
const Statistics = lazy(() => import("../../pages/Statistics/Statistics"));

const MainContent = () => {
  return (
    <div className="container">
      <Suspense fallback={<div>Loading...</div>}>
        <CryptoProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/mylist" element={<MyList />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/crypto/:id" element={<CryptoDetails />} />
          </Routes>
        </CryptoProvider>
      </Suspense>
    </div>
  );
};

export default MainContent;
