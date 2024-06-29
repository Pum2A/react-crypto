import React from "react";
import "./Sidebar.css";
import PersonIcon from "@mui/icons-material/Person";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";
function Sidebar() {
  return (
    <>
      <div className="sidebar-container">
        <div className="profile-container">
          <div className="icon">
            <PersonIcon
              className="icon"
              sx={{ color: "white" }}
              fontSize="large"
            />
          </div>
          <DisabledByDefaultIcon
            className="cancel-icon"
            sx={{ color: "white" }}
            fontSize="large"
          />
        </div>
        <nav>
          <ul>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Statistics</a>
            </li>
            <li>
              <a>Messagess</a>
            </li>
            <li>
              <a>Arcticles</a>
            </li>
            <li>
              <a>My List</a>
            </li>
          </ul>
        </nav>
        <div className="sign-out-container">
          <button className="sign-out">Sign Out</button>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
