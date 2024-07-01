import { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import MainContent from "./components/MainContent/MainContent";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <Router>
      <Sidebar className="flex"></Sidebar>
      <MainContent />
    </Router>
  );
}

export default App;
