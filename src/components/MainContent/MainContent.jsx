import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { CryptoProvider } from "../CryptoContext/CryptoContext";
import CryptoDetails from "../CryptoDetails/CryptoDetails";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import UnprotectedRoute from "../UnprotectedRoute/UnprotectedRoute";
import "./MainContent.css";

const Home = lazy(() => import("../../pages/Home/Home"));
const Articles = lazy(() => import("../../pages/Articles/Articles"));
const MyList = lazy(() => import("../../pages/MyList/MyList"));
const Statistics = lazy(() => import("../../pages/Statistics/Statistics"));
const Login = lazy(() => import("../Login/Login"));
const Register = lazy(() => import("../Register/Register"));

const MainContent = () => {
  return (
    <div className="container">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
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
        </Routes>
      </Suspense>
    </div>
  );
};

export default MainContent;
