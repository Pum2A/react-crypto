import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    // Check if the user already exists
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = existingUsers.find((user) => user.username === username);

    if (userExists) {
      setError("User already exists");
    } else {
      // Add new user to localStorage
      const newUser = { username, password };
      existingUsers.push(newUser);
      localStorage.setItem("users", JSON.stringify(existingUsers));
      navigate("/login");
    }
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2 className="register">Register</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Register</button>
        </form>
        <p className="login-question">Do you have an account?</p>
        <button onClick={handleLoginClick}>Login</button>
      </div>
    </div>
  );
};

export default Register;
