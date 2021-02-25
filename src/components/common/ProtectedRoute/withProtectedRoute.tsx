import { ReactElement } from "react";
import { Redirect } from "react-router-dom";
import { getCurrentUser } from "../../../server/authService";

type TProtectedRoute = (props: any) => () => ReactElement;

export const withProtectedRoute: TProtectedRoute = (Component) => () => {
  const token = getCurrentUser();

  console.log("token", token);

  if (!token) {
    return <Redirect to="/login" />;
  }

  return <Component />;
};
