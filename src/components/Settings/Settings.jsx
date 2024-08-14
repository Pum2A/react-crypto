import React, { useState } from "react";
import { TextField, Button, Avatar } from "@mui/material";

const Settings = () => {
  const [profilePicture, setProfilePicture] = useState(""); // Retrieve from local storage or backend
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFile(reader.result);
        // Save to local storage or backend
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleSave = () => {
    // Save settings logic
  };

  return (
    <div>
      <h1>Settings</h1>
      <Avatar
        src={file || profilePicture}
        alt="Profile Picture"
        sx={{ width: 100, height: 100 }}
      />
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <Button onClick={handleSave}>Save</Button>
    </div>
  );
};

export default Settings;
