import { Route, Redirect, RouteProps } from "react-router-dom";
import { getCurrentUser } from "../../../server/authService";

export const ProtectedRoute = ({
  component: Component,
  render,
  ...rest
}: RouteProps) => {
  const isLogin = getCurrentUser();

  return (
    <Route
      {...rest}
      render={(props: any) => {
        if (!isLogin) {
          console.log("not login :", props);
          return (
            <Redirect
              to={{
                pathname: "/login",
                // 记录从哪个页跳转到登陆页的，登陆后直接跳转到被拦截的页
                state: { from: props.location },
              }}
            />
          );
        }
        return Component ? <Component {...props} /> : render!(props);
      }}
    />
  );
};
