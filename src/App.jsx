import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import MainContent from "./components/MainContent/MainContent";
import { CryptoProvider } from "./components/CryptoContext/CryptoContext";
import { AuthProvider } from "./components/AuthContext/AuthContext";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

function App() {
  return (
    <Router>
      <AuthProvider>
        <CryptoProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/*"
              element={
                <ProtectedRoute>
                  <div className="flex">
                    <Sidebar />
                    <MainContent />
                  </div>
                </ProtectedRoute>
              }
            />
          </Routes>
        </CryptoProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
