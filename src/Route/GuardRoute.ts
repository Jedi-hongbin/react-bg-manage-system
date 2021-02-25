import { FC, ReactElement } from "react";
import { log } from "../utils/logger";
import { IRoute } from "../type";
import useLocalStorage from "../hooks/useLocalStorage";
import { Redirect, Route, useLocation } from "react-router-dom";

interface IProps {
  routeConfig: IRoute[];
}

const GuardRoute: FC<IProps> = ({ routeConfig }) => {
  const { pathname } = useLocation();
  const [token] = useLocalStorage("token");
  log("pathname:", pathname);
  log("routeConfig:", routeConfig);

  const matchRoute: IRoute | undefined = routeConfig.find(
    (route) => route.path === pathname
  );
  log("matchRoute:", matchRoute);

  //   if (!token) {
  //     return <Redirect to="/login" />;
  //   }

  //   if (token) {
  const { path, Component } = matchRoute as IRoute;
  //     return <Route path={path} key={path} component={Component} />;
  //   }
  //   return <Route path={path} key={path} component={Component} />;
  return null;
};

export default GuardRoute;
