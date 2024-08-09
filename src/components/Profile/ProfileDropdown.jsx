import React, { useContext, useState } from "react";
import { IconButton, Menu, MenuItem, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { AuthContext } from "../AuthContext/AuthContext";
import { useNavigate } from "react-router-dom";

const ProfileDropdown = ({ username }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { logout } = useContext(AuthContext);
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

  return (
    <>
      <IconButton onClick={handleClick} color="inherit">
        <AccountCircleIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        sx={{ mt: 2 }}>
        <MenuItem disabled>
          <Typography variant="body1">Hello, {username}!</Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Typography variant="body1">Settings</Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Typography onClick={handleLogout} variant="body1">
            Logout
          </Typography>
        </MenuItem>
      </Menu>
    </>
  );
};

export default ProfileDropdown;
