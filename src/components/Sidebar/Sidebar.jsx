import React from "react";
import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import ArticleIcon from "@mui/icons-material/Article";
import ListIcon from "@mui/icons-material/List";
import LogoutIcon from "@mui/icons-material/Logout";
import styles from "./Sidebar.module.css";
import CloseIcon from "@mui/icons-material/Close";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
      <CloseIcon className={styles.topbar__clearIcon} onClick={toggleSidebar} />

      <nav>
        <ul>
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.active : ""}`
              }>
              <span className={styles.navLinkIcon}>
                <HomeIcon />
              </span>
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/statistics"
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.active : ""}`
              }>
              <span className={styles.navLinkIcon}>
                <QueryStatsIcon />
              </span>
              <span>Statistics</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/articles"
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.active : ""}`
              }>
              <span className={styles.navLinkIcon}>
                <ArticleIcon />
              </span>
              <span>Articles</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/mylist"
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.active : ""}`
              }>
              <span className={styles.navLinkIcon}>
                <ListIcon />
              </span>
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
