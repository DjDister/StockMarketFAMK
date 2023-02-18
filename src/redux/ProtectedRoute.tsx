import React from "react";
import { useAppSelector } from "../hooks/reduxHooks";
import LoginPage from "../pages/LoginPage/LoginPage";

interface PrivateRouteProps {
  component: React.ComponentType<any>;
}
const ProtectedRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
}) => {
  const loginStatus = useAppSelector((state) => state.profile);

  return loginStatus.userId !== "" ? <Component /> : <LoginPage />;
};

export default ProtectedRoute;
