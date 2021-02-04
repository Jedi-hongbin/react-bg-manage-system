import React, { useCallback } from "react";
import Login from "./page/Login";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Admin from "./page/Admin";
import NotFound from "./page/NotFound";

const routes = [
  { path: "/login", name: "login", Component: Login },
  { path: "/", name: "admin", Component: Admin },
  { path: "/notfound", name: "notfound", Component: NotFound },
];

const App: React.FC = () => {
  const renderRoute = useCallback(
    ({ path, Component }) => (
      <Route key={path} exact path={path} component={Component} />
    ),
    []
  );

  return (
    <Router>
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key} classNames="page" timeout={300}>
              <Switch location={location}>
                {routes.map(renderRoute)}
                <Redirect to="/notfound" />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </Router>
  );
};

export default App;
