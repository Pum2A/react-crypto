import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";
import HomeIcon from "@mui/icons-material/Home";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import MessageIcon from "@mui/icons-material/Message";
import ArticleIcon from "@mui/icons-material/Article";
import ListIcon from "@mui/icons-material/List";

function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const isActive = (path) => {
    return location.pathname === path;
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
            <li className={isActive("/home") ? "active" : ""}>
              <HomeIcon />
              <span>Home</span>
            </li>
          </Link>
          <Link to="/statistics">
            <li className={isActive("/statistics") ? "active" : ""}>
              <QueryStatsIcon />
              <span>Statistics</span>
            </li>
          </Link>
          <Link to="/messages">
            <li className={isActive("/messages") ? "active" : ""}>
              <MessageIcon />
              <span>Messages</span>
            </li>
          </Link>
          <Link to="/articles">
            <li className={isActive("/articles") ? "active" : ""}>
              <ArticleIcon />
              <span>Articles</span>
            </li>
          </Link>
          <Link to="/mylist">
            <li className={isActive("/mylist") ? "active" : ""}>
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
