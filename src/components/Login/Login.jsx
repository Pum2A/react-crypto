import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthContext";
import styles from "./Login.module.css"; // Importing the CSS Module

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [error, setError] = React.useState("");
  const { login } = React.useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const { username, password } = data;

    // Retrieve existing users from localStorage
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const user = existingUsers.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      login(user); // Pass the entire user object
      navigate("/");
    } else {
      setError("Invalid username or password");
    }
  };

  const handleRegisterClick = () => {
    navigate("/register");
  };

  return (
    <div className={styles.authContainer}>
      <div className={styles.authForm}>
        <h2 className={styles.loginTitle}>Login</h2>
        {error && <p className={styles.error}>{error}</p>}
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Username"
            {...register("username", {
              required: "Username is required",
              maxLength: {
                value: 20,
                message: "Username cannot exceed 20 characters",
              },
              minLength: {
                value: 2,
                message: "Username must be at least 2 characters",
              },
            })}
          />
          {errors.username && (
            <p className={styles.error}>{errors.username.message}</p>
          )}

          <input
            type="password"
            placeholder="Password"
            {...register("password", {
              required: "Password is required",
              maxLength: {
                value: 20,
                message: "Password cannot exceed 20 characters",
              },
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            })}
          />
          {errors.password && (
            <p className={styles.error}>{errors.password.message}</p>
          )}

          <button type="submit">Login</button>
        </form>
        <p className={styles.registerQuestion}>Don't have an account?</p>
        <button className={styles.newUserBtn} onClick={handleRegisterClick}>
          Register
        </button>
      </div>
    </div>
  );
};

export default Login;
