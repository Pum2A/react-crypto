import React, { useState, useContext } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const user = existingUsers.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      login(user.username);
      navigate("/");
    } else {
      setError("Invalid username or password");
    }
  };

  const handleRegisterClick = () => {
    navigate("/register");
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2 className="login">Login</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleLogin}>
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
          <button type="submit">Login</button>
        </form>
        <p className="register-question">Don't have an account?</p>
        <button onClick={handleRegisterClick}>Register</button>
      </div>
    </div>
  );
};

export default Login;