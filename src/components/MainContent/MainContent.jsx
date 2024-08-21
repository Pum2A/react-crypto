import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import UnprotectedRoute from "../UnprotectedRoute/UnprotectedRoute";
import Topbar from "../Topbar/Topbar";
import "./MainContent.css";

const Home = lazy(() => import("../../pages/Home/Home"));
const CryptoDetails = lazy(() => import("../CryptoDetails/CryptoDetails"));
const Articles = lazy(() => import("../../pages/Articles/Articles"));
const MyList = lazy(() => import("../../pages/MyList/MyList"));
const Statistics = lazy(() => import("../../pages/Statistics/Statistics"));
const Login = lazy(() => import("../Login/Login"));
const Register = lazy(() => import("../Register/Register"));
const Settings = lazy(() => import("../Settings/Settings"));
const Cryptos = lazy(() => import("../../pages/Cryptos/Cryptos"));

const MainContent = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const toggleSidebar = () => {};

  return (
    <div className="mainContentWrapper">
      <Topbar onSearch={handleSearch} toggleSidebar={toggleSidebar} />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home searchQuery={searchQuery} />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home searchQuery={searchQuery} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/articles"
            element={
              <ProtectedRoute>
                <Articles />
              </ProtectedRoute>
            }
          />
          <Route
            path="/cryptos"
            element={
              <ProtectedRoute>
                <Cryptos searchQuery={searchQuery} onSearch={handleSearch} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/mylist"
            element={
              <ProtectedRoute>
                <MyList />
              </ProtectedRoute>
            }
          />
          <Route
            path="/statistics"
            element={
              <ProtectedRoute>
                <Statistics />
              </ProtectedRoute>
            }
          />
          <Route path="/crypto/:id" element={<CryptoDetails />} />
          <Route
            path="/login"
            element={
              <UnprotectedRoute>
                <Login />
              </UnprotectedRoute>
            }
          />
          <Route
            path="/register"
            element={
              <UnprotectedRoute>
                <Register />
              </UnprotectedRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <ProtectedRoute>
                <Settings />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Suspense>
    </div>
  );
};

export default MainContent;
