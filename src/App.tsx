import React from "react";
import Login from "./page/Login";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Admin from "./page/Admin";
import NotFound from "./page/NotFound";
import {
  ThemeProvider as StyledThemeProvider,
  createGlobalStyle,
} from "styled-components";
import { useSelector } from "react-redux";
import { Theme } from "./redux/types";
import { ThemeProvider as MaterThemeProvider } from "@material-ui/core";
import Snackbar from "./components/UI/Snackbar";
import FrontendAuth from "./Route/FrontendAuth";
import { IRoute } from "./type";
import { Dashboard } from "@material-ui/icons";
import GuardRoute from "../src/Route/GuardRoute";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props: { theme: Theme }) =>
      props.theme.palette.background.default};
    .ant-menu-vertical {
      border: none;
    }
  }
`;

const routes: IRoute[] = [
  { path: "/login", exact: true, name: "login", Component: Login },
  { path: "/notfound", exact: true, name: "notfound", Component: NotFound },
  {
    path: "/",
    name: "admin",
    exact: false,
    Component: Admin,
    public: true,
    redirect: { path: "/dashboard", Component: Dashboard },
  },
];

const renderRoute = (route: IRoute) => {
  const { path, exact, Component } = route;
  // if (redirect) {
  //   console.log("redirect");
  //   const { path, Component } = redirect;
  //   return <Route key={path} path={path} component={Component} />;
  // }
  // const isLogin = getUserTokenStorage();

  // if (isLogin) {
  return <Route key={path} exact={exact} path={path} component={Component} />;
  // }
  // return <Route path={path} key={path} component={Login} />;
  // return <Redirect to="/login" />;
};

const App: React.FC = () => {
  const { theme } = useSelector((state: any) => state.theme);

  return (
    <StyledThemeProvider theme={theme}>
      <MaterThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <Switch>
            {/* <Route path={"/login"} key={"/login"} component={Login} /> */}
            {routes.map(renderRoute)}
            {/* <Redirect to="notfound" /> */}
            {/* <FrontendAuth routerConfig={routes} /> */}
            {/* <GuardRoute routeConfig={routes} /> */}
          </Switch>
        </Router>
        <Snackbar />
      </MaterThemeProvider>
    </StyledThemeProvider>
  );
};

export default App;
