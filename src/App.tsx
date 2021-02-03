import React from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import "./App.css";
import TransitionRoute from "./Route/TransitionRoute";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route, Redirect } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import User from "./components/User";

const routes = [
  { path: "/login", name: "login", Component: Login },
  { path: "/dashboard", name: "dashboard", Component: Dashboard },
  { path: "/user", name: "user", Component: User },
];

const App: React.FC = () => {
  return (
    <Router>
      <Route
        render={({ location }) => (
          <>
            <Route exact path="/" render={() => <Redirect to="/login" />} />

            <TransitionGroup>
              <CSSTransition key={location.key} classNames="page" timeout={300}>
                <Switch location={location}>
                  {routes.map(({ path, Component }) => (
                    <Route exact path={path} component={Component} />
                  ))}
                  <Route render={() => <div>Not Found</div>} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          </>
        )}
      />
    </Router>
  );
};

export default App;
