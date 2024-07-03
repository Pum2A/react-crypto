import React, { useState } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";
import HomeIcon from "@mui/icons-material/Home";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import MessageIcon from "@mui/icons-material/Message";
import ArticleIcon from "@mui/icons-material/Article";
import ListIcon from "@mui/icons-material/List";

function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`sidebar-container ${isCollapsed ? "collapsed" : ""}`}>
      <div className="profile-container">
        <DisabledByDefaultIcon
          className="cancel-icon"
          sx={{ color: "white", fontSize: "4rem" }}
          onClick={toggleSidebar}
        />
      </div>
      <nav className={`${isCollapsed ? "collapsed" : ""}`}>
        <ul>
          <Link to="/home">
            <li>
              <HomeIcon />
              <span>Home</span>
            </li>
          </Link>
          <Link to="/statistics">
            <li>
              <QueryStatsIcon />
              <span>Statistics</span>
            </li>
          </Link>
          <Link to="/messages">
            <li>
              <MessageIcon />
              <span>Messages</span>
            </li>
          </Link>
          <Link to="/articles">
            <li>
              <ArticleIcon />
              <span>Articles</span>
            </li>
          </Link>
          <Link to="/mylist">
            <li>
              <ListIcon />
              <span>My List</span>
            </li>
          </Link>
        </ul>
      </nav>
      <div className={`sign-out-container ${isCollapsed ? "collapsed" : ""}`}>
        <button className="sign-out">Sign Out</button>
      </div>
    </div>
  );
}

export default Sidebar;
