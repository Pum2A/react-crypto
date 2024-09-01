import React, { useState } from "react";
import { HashRouter as Router } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import MainContent from "./components/MainContent/MainContent";
import { CryptoProvider } from "./components/CryptoContext/CryptoContext";
import { AuthProvider } from "./components/AuthContext/AuthContext";
import Topbar from "./components/Topbar/Topbar";

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleSidebar = () => {
    console.log("Sidebar toggle clicked");
    setSidebarOpen((prevState) => !prevState);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <Router>
      <AuthProvider>
        <CryptoProvider>
          <div className="flex">
            {/* Conditionally render Sidebar based on screen size */}
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

            <div className="mainContentWrapper">
              <Topbar onSearch={handleSearch} toggleSidebar={toggleSidebar} />

              <MainContent
                searchQuery={searchQuery}
                handleSearch={handleSearch}
                toggleSidebar={toggleSidebar}
              />
            </div>
          </div>
        </CryptoProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
