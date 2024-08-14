import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./Topbar.module.css"; // Importing the CSS Module
import ProfileDropdown from "../Profile/ProfileDropdown";

const Topbar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    onSearch(value); // Send the search query up to the parent component (Home)
  };

  const clearSearch = () => {
    setSearchQuery("");
    onSearch(""); // Clear the search query in the parent component as well
  };

  return (
    <div className={styles.topbar}>
      <div className={styles.topbar__logo}>
        <h1>CRX</h1>
      </div>
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
