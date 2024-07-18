import Sidebar from "./components/Sidebar/Sidebar";
import MainContent from "./components/MainContent/MainContent";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar></Sidebar>
        <MainContent />
      </div>
    </Router>
  );
}

export default App;
