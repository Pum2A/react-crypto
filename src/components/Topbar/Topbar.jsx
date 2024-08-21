import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./Topbar.module.css";
import ProfileDropdown from "../Profile/ProfileDropdown";
import MenuIcon from "@mui/icons-material/Menu";

const Topbar = ({ onSearch, toggleSidebar }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    onSearch(value);
  };

  const clearSearch = () => {
    setSearchQuery("");
    onSearch("");
  };

  return (
    <div className={styles.topbar}>
      <div
        className={styles.menuIcon}
        onClick={() => {
          console.log("Menu icon clicked");
          toggleSidebar();
        }}>
        <MenuIcon style={{ color: "#fff", cursor: "pointer" }} />
      </div>
      <div className={styles.topbar__logo}></div>
      <div className={styles.topbar__searchContainer}>
        <SearchIcon className={styles.topbar__searchIcon} />
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearch}
          className={styles.topbar__search}
        />
        {searchQuery && (
          <CloseIcon
            className={styles.topbar__clearIcon}
            onClick={clearSearch}
          />
        )}
      </div>
      <div className={styles.topbar__user}>
        <ProfileDropdown username="Test" />
      </div>
    </div>
  );
};

export default Topbar;
