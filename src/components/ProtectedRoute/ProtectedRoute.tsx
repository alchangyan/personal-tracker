import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRoute() {
  // const isAuthenticated = !!localStorage.getItem('token');
  const isAuthenticated = true;

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace />
  );
}