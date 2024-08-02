import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Sidebar.css";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";
import HomeIcon from "@mui/icons-material/Home";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import MessageIcon from "@mui/icons-material/Message";
import ArticleIcon from "@mui/icons-material/Article";
import ListIcon from "@mui/icons-material/List";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
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
        <span onClick={toggleSidebar} className="logo">
          {isCollapsed ? (
            <MenuIcon className="menu" fontSize="large" />
          ) : (
            <CloseIcon />
          )}
        </span>
      </div>
      <nav
        className={`${isCollapsed ? "collapsed" : ""}`}
        aria-label="Sidebar navigation">
        <ul>
          <li className={isActive("/home") ? "active" : ""}>
            <NavLink
              to="/home"
              aria-label="Home"
              aria-current={isActive("/home") ? "page" : undefined}
              className={"navLink"}>
              <HomeIcon />
              <span>Home</span>
            </NavLink>
          </li>
          <li className={isActive("/statistics") ? "active" : ""}>
            <NavLink
              to="/statistics"
              aria-label="Statistics"
              aria-current={isActive("/statistics") ? "page" : undefined}
              className={"navLink"}>
              <QueryStatsIcon />
              <span>Statistics</span>
            </NavLink>
          </li>
          <li className={isActive("/messages") ? "active" : ""}>
            <NavLink
              to="/messages"
              aria-label="Messages"
              aria-current={isActive("/messages") ? "page" : undefined}
              className={"navLink"}>
              <MessageIcon />
              <span>Messages</span>
            </NavLink>
          </li>
          <li className={isActive("/articles") ? "active" : ""}>
            <NavLink
              to="/articles"
              aria-label="Articles"
              aria-current={isActive("/articles") ? "page" : undefined}
              className={"navLink"}>
              <ArticleIcon />
              <span>Articles</span>
            </NavLink>
          </li>
          <li className={isActive("/mylist") ? "active" : ""}>
            <NavLink
              to="/mylist"
              aria-label="My List"
              aria-current={isActive("/mylist") ? "page" : undefined}
              className={"navLink"}>
              <ListIcon />
              <span>My List</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className={`sign-out-container ${isCollapsed ? "collapsed" : ""}`}>
        <button className="sign-out" aria-label="Sign Out">
          <LogoutIcon className="logout-icon" />
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
