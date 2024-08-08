import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./Topbar.css";
import ProfileDropdown from "../Profile/ProfileDropdown";

const Topbar = () => {
  const username = "Test";

  return (
    <div className="topbar">
      <div className="topbar__logo">
        <h1>CRX</h1>
      </div>
      <div className="topbar__user">
        <ProfileDropdown username={username} />
      </div>
    </div>
  );
};

export default Topbar;
