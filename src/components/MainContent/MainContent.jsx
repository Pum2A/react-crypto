import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { CryptoProvider } from "../CryptoContext/CryptoContext";

const Home = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => resolve(import("../../pages/Home/Home")), 1000);
    })
);
const Articles = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => resolve(import("../../pages/Articles/Articles")), 1000);
    })
);
const Messages = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => resolve(import("../../pages/Messages/Messages")), 1000);
    })
);
const MyList = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => resolve(import("../../pages/MyList/MyList")), 1000);
    })
);
const Statistics = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(
        () => resolve(import("../../pages/Statistics/Statistics")),
        1000
      );
    })
);

const MainContent = () => {
  return (
    <div className="container" style={{ padding: "0rem 1rem", flex: 1 }}>
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
