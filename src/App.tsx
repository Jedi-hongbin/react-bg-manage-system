import React from "react";
import Login from "./page/Login";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Admin from "./page/Admin";
import NotFound from "./page/NotFound";
import { IRoute } from "./type";
import {
  ThemeProvider as StyledThemeProvider,
  createGlobalStyle,
} from "styled-components";
import { useSelector } from "react-redux";
import { Theme } from "./redux/types";
import { ThemeProvider as MaterThemeProvider } from "@material-ui/core";
import Snackbar from "./components/UI/Snackbar";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props: { theme: Theme }) =>
      props.theme.palette.background.default};
    .ant-menu-vertical {
      border: none;
    }
  }
`;

const routes = [
  { path: "/login", exact: true, name: "login", Component: Login },
  { path: "/notfound", exact: true, name: "notfound", Component: NotFound },
  { path: "/", name: "admin", exact: false, Component: Admin },
];

const renderRoute = (route: IRoute) => (
  <Route
    key={route.path}
    exact={route.exact}
    path={route.path}
    component={route.Component}
  />
);

const App: React.FC = () => {
  const { theme } = useSelector((state: any) => state.theme);

  return (
    <StyledThemeProvider theme={theme}>
      <MaterThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <Switch>
            {routes.map(renderRoute)}
            <Redirect to="notfound" />
          </Switch>
        </Router>
        <Snackbar />
      </MaterThemeProvider>
    </StyledThemeProvider>
  );
};

export default App;
