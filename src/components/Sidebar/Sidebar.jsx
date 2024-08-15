import React from "react";
import { NavLink } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import QueryStatsOutlinedIcon from "@mui/icons-material/QueryStatsOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
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
                <HomeOutlinedIcon />
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
                <QueryStatsOutlinedIcon />
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
                <ArticleOutlinedIcon />
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
                <ListOutlinedIcon />
              </span>
              <span>My List</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className={styles.signOutContainer}>
        <button className={styles.signOut}>
          <LogoutOutlinedIcon />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
