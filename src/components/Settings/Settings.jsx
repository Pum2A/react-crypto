import React, { useState, useEffect } from "react";
import { Button, Avatar } from "@mui/material";
import styles from "./settings.module.css"; // Importing the CSS Module

const Settings = () => {
  const [profilePicture, setProfilePicture] = useState("");
  const [file, setFile] = useState(null);

  // Load the profile picture from local storage when the component mounts
  useEffect(() => {
    const savedProfilePicture = localStorage.getItem("profilePicture");
    if (savedProfilePicture) {
      setProfilePicture(savedProfilePicture);
    }
  }, []);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFile(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleSave = () => {
    if (file) {
      localStorage.setItem("profilePicture", file);
      setProfilePicture(file);
      alert("Settings saved successfully!");
      window.location.reload();
    } else {
      alert("Please select a profile picture.");
    }
  };

  return (
    <div className={styles.settings_container}>
      <div className={styles.settings_header}>
        <h1>Settings</h1>
      </div>
      <div className={styles.settings_form}>
        <div className={styles.settings_avatar_text}>
          <h3>Avatar</h3>
          <Avatar
            src={file || profilePicture}
            alt="Profile Picture"
            className={styles.settings_avatar}
          />
        </div>
        <input type="file" accept="image/*" onChange={handleFileChange} />
        <Button onClick={handleSave} className={styles.settings_save_btn}>
          Save
        </Button>
      </div>
    </div>
  );
};

export default Settings;
