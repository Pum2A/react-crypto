import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import MainContent from "./components/MainContent/MainContent";
import { CryptoProvider } from "./components/CryptoContext/CryptoContext";
import { AuthProvider } from "./components/AuthContext/AuthContext";

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <Router>
      <AuthProvider>
        <CryptoProvider>
          <div className="flex">
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <MainContent
              searchQuery={searchQuery}
              handleSearch={handleSearch}
              toggleSidebar={toggleSidebar}
            />
          </div>
        </CryptoProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
