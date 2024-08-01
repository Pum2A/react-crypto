import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import MainContent from "./components/MainContent/MainContent";
import { CryptoProvider } from "./components/CryptoContext/CryptoContext"; // Import the CryptoProvider

function App() {
  return (
    <Router>
      <CryptoProvider>
        <div className="flex">
          <Sidebar />
          <MainContent />
        </div>
      </CryptoProvider>
    </Router>
  );
}

export default App;
