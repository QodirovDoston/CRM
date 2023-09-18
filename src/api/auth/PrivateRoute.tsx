import { Navigate, Outlet } from "react-router-dom";

import tokenService from "../tokenService";

function PrivateRoute(): any {
  const token = tokenService.getLocalAccessToken();
  if (token) {
    return <Outlet />;
  }
  return <Navigate to={token ? "/" : "/login"} />;
}

export default PrivateRoute;
