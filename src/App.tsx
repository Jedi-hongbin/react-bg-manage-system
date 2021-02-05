import React from "react";
import Login from "./page/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Admin from "./page/Admin";
import NotFound from "./page/NotFound";
import { IRoute } from "./type";

const routes = [
  { path: "/login", name: "login", Component: Login },
  { path: "/", name: "admin", Component: Admin },
  { path: "/notfound", name: "notfound", Component: NotFound },
];

const renderRoute = (route: IRoute) => (
  <Route key={route.path} path={route.path} component={route.Component} />
);

const App: React.FC = () => (
  <Router>
    <Switch>{routes.map(renderRoute)}</Switch>
  </Router>
);

export default App;
