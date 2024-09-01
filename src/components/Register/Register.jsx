import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styles from "./Register.module.css";
const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [error, setError] = React.useState("");
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const { username, password, name } = data;

    // Retrieve existing users from localStorage
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = existingUsers.find((user) => user.username === username);

    if (userExists) {
      setError("User already exists");
    } else {
      const newUser = { username, password, name }; // Include name in the new user object
      existingUsers.push(newUser);
      localStorage.setItem("users", JSON.stringify(existingUsers));
      navigate("/login");
    }
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className={styles.authContainer}>
      <div className={styles.authForm}>
        <h2 className={styles.register}>Register</h2>
        {error && <p className={styles.error}>{error}</p>}
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Name"
            {...register("name", {
              required: "Name is required",
              maxLength: {
                value: 20,
                message: "Name cannot exceed 20 characters",
              },
            })}
          />
          {errors.name && <p className={styles.error}>{errors.name.message}</p>}

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
              pattern: {
                value: /^[A-Za-z]+$/,
                message: "Username can only contain letters",
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
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=]).{8,}$/,
                message:
                  "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
              },
            })}
          />
          {errors.password && (
            <p className={styles.error}>{errors.password.message}</p>
          )}

          <button type="submit">Register</button>
        </form>
        <p className={styles.loginQuestion}>Do you have an account?</p>
        <button className={styles.actuallyUserBtn} onClick={handleLoginClick}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Register;
