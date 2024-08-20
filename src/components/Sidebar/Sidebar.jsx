import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./Sidebar.module.css";

import ProfileDropdown from "../Profile/ProfileDropdown";
import {
  CurrencyBitcoin,
  Home,
  Settings,
  QueryStatsOutlined,
  ArticleOutlined,
  ListOutlined,
} from "@mui/icons-material";
const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`${styles.sidebar} ${!isOpen ? styles.open : ""}`}>
      {/* <CloseIcon className={styles.topbar__clearIcon} onClick={toggleSidebar} /> */}
      <span className={styles.logoContainer}>
        <div className={styles.logo}>CRX</div>
      </span>
      <nav>
        {/* <p className={styles.mainTools}>Main Tools</p> */}
        <ul>
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.active : ""}`
              }>
              <span className={styles.navLinkIcon}>
                <Home />
              </span>
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cryptos"
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.active : ""}`
              }>
              <span className={styles.navLinkIcon}>
                <CurrencyBitcoin />
              </span>
              <span>Cryptos</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/statistics"
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.active : ""}`
              }>
              <span className={styles.navLinkIcon}>
                <QueryStatsOutlined />
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
                <ArticleOutlined />
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
                <ListOutlined />
              </span>
              <span>My List</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/settings"
              className={({ isActive }) =>
                `${styles.navLink} ${styles.navLinkSettings} ${
                  isActive ? styles.active : ""
                }`
              }>
              <span className={styles.navLinkIcon}>
                <Settings />
              </span>
              <span>Settings</span>
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className={styles.bottomNavLinkContainer}>
        <div className={styles.topbar__user}>
          <ProfileDropdown />
          <p>Test</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
