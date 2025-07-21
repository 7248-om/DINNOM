import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const AdminProtectedRoute = () => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  if (!user.isAdmin) {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
};

export default AdminProtectedRoute;

