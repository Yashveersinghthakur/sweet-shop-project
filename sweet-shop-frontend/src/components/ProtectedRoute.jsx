import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const isAuthenticated = true; // Change this later to your auth logic
  return isAuthenticated ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
