import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/AuthContext';

const PrivateRoute = ({children}) => {

  const { user } = useAuth();

  let location = useLocation();

  return user?.email ? (
    children
  ) : (
    <Navigate to="/signin" state={{ from: location }} replace />
  );
};

export default PrivateRoute;