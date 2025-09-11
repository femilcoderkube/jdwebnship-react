import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function AuthGuard() {
  const { isAuthenticated } = useSelector((state) => state.auth);

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}

export default AuthGuard;
