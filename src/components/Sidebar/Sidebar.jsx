import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";
import ProfileDropdown from "../Profile/ProfileDropdown";
import {
  CurrencyBitcoin,
  Home,
  Settings,
  QueryStatsOutlined,
  ArticleOutlined,
  Favorite,
  Close,
} from "@mui/icons-material";
import { AuthContext } from "../AuthContext/AuthContext";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const { user } = useContext(AuthContext);
  const [displayName, setDisplayName] = useState(user?.name || "User");

  const handleDisplayNameChange = (name) => {
    setDisplayName(name);
  };

  return (
    <div
      className={`${styles.sidebar} ${isOpen ? styles.open : styles.hidden}`}>
      <div className={styles.closeContainer}>
        <Close
          fontSize="large"
          className={styles.topbar__clearIcon}
          onClick={toggleSidebar}
        />
      </div>
      <span className={styles.logoContainer}>
        <div className={styles.logo}>CRX</div>
      </span>
      <nav>
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
              to="/favorites"
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.active : ""}`
              }>
              <span className={styles.navLinkIcon}>
                <Favorite />
              </span>
              <span>Favorites</span>
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
        <div className={styles.bottomNavLinkContainer}>
          <div className={styles.topbar__user}>
            <ProfileDropdown onDisplayNameChange={handleDisplayNameChange} />
            <p>{displayName}</p>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
