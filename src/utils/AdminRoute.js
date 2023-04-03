import React from 'react';
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/AuthContext";

const AdminRoute = ({ children }) => {

  const { user } = useAuth();

  return user?.isAdmin ? children : <Navigate to="/signin" />;
};

export default AdminRoute;