import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  isAuthenticated: boolean;
  isAdmin: boolean;
  children: React.ReactNode;
}

export const ProtectedRoute = ({ isAuthenticated, isAdmin, children }: ProtectedRouteProps) => {
  if (!isAuthenticated) return <Navigate to="/login" />;
  if (!isAdmin) return <Navigate to="/unauthorized" />;
  return <>{children}</>;
};