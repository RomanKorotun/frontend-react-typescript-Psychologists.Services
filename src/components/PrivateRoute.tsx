import { FC } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { IPrivateRouteProps } from "../interfaces/authInterfaces";

export const PrivateRoute: FC<IPrivateRouteProps> = ({ redirectTo, page }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? page : <Navigate to={redirectTo} />;
};
