import React, { useState, useEffect } from "react";
import { Button, Avatar } from "@mui/material";

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
        // Ensure we are getting a base64 encoded string
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
    } else {
      alert("Please select a profile picture.");
    }
  };

  return (
    <div>
      <h1>Settings</h1>
      <Avatar
        src={file || profilePicture} // Render the uploaded or saved picture
        alt="Profile Picture"
        sx={{ width: 100, height: 100 }}
      />
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{ margin: "10px 0" }} // Add some margin for better UI
      />
      <Button onClick={handleSave} variant="contained" color="primary">
        Save
      </Button>
    </div>
  );
};

export default Settings;
