import React from 'react';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn');

  // If logged in, redirect to the user-account page
  if (isLoggedIn) {
    return <Navigate to="/user-account" />;
  }

  // If not logged in, allow access to the route
  return children;
};

export default PublicRoute;
