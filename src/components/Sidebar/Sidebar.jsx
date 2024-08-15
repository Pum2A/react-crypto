import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import ArticleIcon from "@mui/icons-material/Article";
import ListIcon from "@mui/icons-material/List";
import LogoutIcon from "@mui/icons-material/Logout";
import styles from "./Sidebar.module.css";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
      <button onClick={toggleSidebar} className={styles.closeBtn}>
        Close
      </button>
      <nav>
        <ul>
          <li className={isActive("/home") ? styles.active : ""}>
            <NavLink to="/home" className={styles.navLink}>
              <HomeIcon />
              <span>Home</span>
            </NavLink>
          </li>
          <li className={isActive("/statistics") ? styles.active : ""}>
            <NavLink to="/statistics" className={styles.navLink}>
              <QueryStatsIcon />
              <span>Statistics</span>
            </NavLink>
          </li>
          <li className={isActive("/articles") ? styles.active : ""}>
            <NavLink to="/articles" className={styles.navLink}>
              <ArticleIcon />
              <span>Articles</span>
            </NavLink>
          </li>
          <li className={isActive("/mylist") ? styles.active : ""}>
            <NavLink to="/mylist" className={styles.navLink}>
              <ListIcon />
              <span>My List</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <button className={styles.signOut}>
        <LogoutIcon />
        <span>Sign Out</span>
      </button>
    </div>
  );
};

export default Sidebar;
