import React, { useState, useContext, useEffect } from "react";
import { IconButton, Menu, MenuItem, Typography, Avatar } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { AuthContext } from "../AuthContext/AuthContext";
import { useNavigate } from "react-router-dom";

const ProfileDropdown = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [profilePicture, setProfilePicture] = useState("");
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    // Load the profile picture from local storage when the component mounts
    const savedProfilePicture = localStorage.getItem("profilePicture");
    if (savedProfilePicture) {
      setProfilePicture(savedProfilePicture);
    }
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    handleClose();
    navigate("/login");
  };

  const displayName = user?.name || "User"; // Use user.name if available, otherwise fallback to "User"

  return (
    <>
      <IconButton onClick={handleClick} color="inherit">
        <Avatar
          src={profilePicture}
          alt={displayName}
          sx={{ width: 40, height: 40 }}>
          {<AccountCircleIcon /> && !profilePicture}
        </Avatar>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        sx={{ mt: 2 }}>
        <MenuItem disabled>
          <Typography variant="body1">Hello, {displayName}!</Typography>
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            navigate("/settings");
          }}>
          <Typography variant="body1">Settings</Typography>
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <Typography variant="body1">Logout</Typography>
        </MenuItem>
      </Menu>
    </>
  );
};

export default ProfileDropdown;
