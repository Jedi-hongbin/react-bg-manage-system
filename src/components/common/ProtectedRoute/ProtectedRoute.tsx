import { Route, Redirect, RouteProps } from "react-router-dom";
import useLocalStorage from "../../../hooks/useLocalStorage";

export const ProtectedRoute = ({
  component: Component,
  render,
  ...rest
}: RouteProps) => {
  const [token] = useLocalStorage("token");
  return (
    <Route
      {...rest}
      render={(props: any) => {
        if (!token)
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location },
              }}
            />
          );
        return Component ? <Component {...props} /> : render!(props);
      }}
    />
  );
};
