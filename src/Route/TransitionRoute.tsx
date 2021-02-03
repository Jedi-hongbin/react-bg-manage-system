import React, { useCallback } from "react";
import { CSSTransition } from "react-transition-group";
import { Route } from "react-router-dom";

interface TransitionRouteProps {
  routes: Array<{
    path: string;
    name: string;
    Component: any;
  }>;
}
const TransitionRoute: React.FC<TransitionRouteProps> = ({ routes }): any => {
  const renderRoute = useCallback(
    ({ path, Component }: any) => (
      <Route key={path} exact path={path}>
        {({ match }) => (
          <CSSTransition
            in={match != null}
            timeout={300}
            classNames="page"
            unmountOnExit
          >
            <Component />
          </CSSTransition>
        )}
      </Route>
    ),
    []
  );
  return routes.map(renderRoute);
};
export default TransitionRoute;
