import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  //const token = localStorage.getItem('token');

  // If not logged in, redirect to the login page
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  // If logged in, allow access to the route
  return children;
};

export default ProtectedRoute;
