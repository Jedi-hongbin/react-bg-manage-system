import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import { IRoute } from "../type";
import "./TransitionDrop.css";
import { withGuardRoute } from "../Route/GuardRoute/index";

interface TransitionRouteProps {
  routes: Array<IRoute>;
}

const renderRoute = ({ path, Component, exact, public: isPublic }: IRoute) => (
  <Route
    key={path}
    exact={exact}
    path={path}
    component={isPublic ? Component : withGuardRoute(Component)}
  />
);

const TransitionRoute: React.FC<TransitionRouteProps> = ({ routes }): any => {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition key={location.pathname} classNames="drop" timeout={300}>
        <Switch location={location}>
          <Redirect path="/" to="/dashboard" exact />
          {routes.map(renderRoute)}
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default TransitionRoute;
