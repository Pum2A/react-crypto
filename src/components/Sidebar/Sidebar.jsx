import React from "react";
import "./Sidebar.css";
import PersonIcon from "@mui/icons-material/Person";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";
import { Link } from "react-router-dom";

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
            <Link to="/home">
              <li>Home</li>
            </Link>
            <Link to="/statistics">
              <li>Statistics</li>
            </Link>
            <Link to="/messagess">
              <li>Messagess</li>
            </Link>
            <Link to="/articles">
              <li>Articles</li>
            </Link>
            <Link to="/mylist">
              <li>My List</li>
            </Link>
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
