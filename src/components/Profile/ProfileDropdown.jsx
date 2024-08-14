import React, { useContext, useState } from "react";
import { IconButton, Menu, MenuItem, Typography, Avatar } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { AuthContext } from "../AuthContext/AuthContext";
import { useNavigate } from "react-router-dom";

const ProfileDropdown = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

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

  const handleSettings = () => {
    handleClose();
    navigate("/settings");
  };

  return (
    <>
      <IconButton onClick={handleClick} color="inherit">
        <Avatar src={user.profilePicture} alt={user.name}>
          <AccountCircleIcon />
        </Avatar>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        sx={{ mt: 2 }}>
        <MenuItem disabled>
          <Typography variant="body1">Hello, {user.name}!</Typography>
          <Typography variant="body2" color="textSecondary">
            {user.email}
          </Typography>
        </MenuItem>
        <MenuItem onClick={() => navigate("/settings")}>
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
