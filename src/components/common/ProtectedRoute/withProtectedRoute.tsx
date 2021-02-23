import { ReactElement } from "react";
import { Redirect } from "react-router-dom";
import { getCurrentUser } from "../../../server/authService";

type TWithGuardRoute = (props: any) => () => ReactElement;

export const withGuardRoute: TWithGuardRoute = (Component) => () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const token = getCurrentUser();
  console.log("token", token, Component);
  if (!token) {
    return <Redirect to="/login" />;
  }

  return <Component />;
};
