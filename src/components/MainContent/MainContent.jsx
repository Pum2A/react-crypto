import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Articles from "../../pages/Articles/Articles";
import Messagess from "../../pages/Messagess/Messagess";
import MyList from "../../pages/MyList/MyList";
import Statistics from "../../pages/Statistics/Statistics";

const MainContent = () => {
  return (
    <div style={{ padding: "10px", flex: 1 }}>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/messagess" element={<Messagess />} />
          <Route path="/mylist" element={<MyList />} />
          <Route path="/statistics" element={<Statistics />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default MainContent;
