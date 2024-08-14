import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthContext";

const UnprotectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  return !user ? children : <Navigate to="/home" />;
};

export default UnprotectedRoute;
