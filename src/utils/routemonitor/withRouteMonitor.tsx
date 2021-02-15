import React, { FC, ReactElement, useLayoutEffect, useCallback } from "react";
import { useHistory } from "react-router-dom";
import menuList from "../../config/menuConfig";
import { routerMonitor } from ".";

type IProps = (Component: React.FC<any>) => () => ReactElement;

const withRouteMonitor: IProps = (Component) => () => {
  const {
    location: { pathname },
    replace,
  } = useHistory();

  const routerRedirect = useCallback(() => {
    routerMonitor(menuList, pathname, replace);
  }, [pathname, replace]);

  useLayoutEffect(routerRedirect, [routerRedirect]);

  return <Component />;
};

export default withRouteMonitor;
