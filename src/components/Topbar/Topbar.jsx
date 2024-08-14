import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import "./Topbar.css";
import ProfileDropdown from "../Profile/ProfileDropdown";

const Topbar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    onSearch(value); // Send the search query up to the parent component (Home)
  };

  return (
    <div className="topbar">
      <div className="topbar__logo">
        <h1>CRX</h1>
      </div>
      <div className="topbar__search-container">
        <SearchIcon className="topbar__search-icon" />
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearch}
          className="topbar__search"
        />
      </div>
      <div className="topbar__user">
        <ProfileDropdown username="Test" />
      </div>
    </div>
  );
};

export default Topbar;
