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
      </MaterThemeProvider>
    </StyledThemeProvider>
  );
};

export default App;

// import "./Route/TransitionStyle.css";
// import React from "react";
// import { TransitionGroup, CSSTransition } from "react-transition-group";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   Redirect,
// } from "react-router-dom";

// /* you'll need this CSS somewhere
// .fade-enter {
//   opacity: 0;
//   z-index: 1;
// }

// .fade-enter.fade-enter-active {
//   opacity: 1;
//   transition: opacity 250ms ease-in;
// }
// */

// const AnimationExample = () => (
//   <Router>
//     <Route
//       render={({ location }) => (
//         <div style={styles.fill}>
//           <Route
//             exact
//             path="/"
//             render={() => <Redirect to="/hsl/10/90/50" />}
//           />

//           <ul style={styles.nav}>
//             <NavLink to="/hsl/10/90/50">Red</NavLink>
//             <NavLink to="/hsl/120/100/40">Green</NavLink>
//             <NavLink to="/rgb/33/150/243">Blue</NavLink>
//             <NavLink to="/rgb/240/98/146">Pink</NavLink>
//           </ul>

//           <div style={styles.content}>
//             <TransitionGroup>
//               {/* no different than other usage of
//                 CSSTransition, just make sure to pass
//                 `location` to `Switch` so it can match
//                 the old location as it animates out
//             */}
//               <CSSTransition key={location.key} classNames="fade" timeout={300}>
//                 <Switch location={location}>
//                   <Route exact path="/hsl/:h/:s/:l" component={HSL} />
//                   <Route exact path="/rgb/:r/:g/:b" component={RGB} />
//                   {/* Without this `Route`, we would get errors during
//                     the initial transition from `/` to `/hsl/10/90/50`
//                 */}
//                   <Route render={() => <div>Not Found</div>} />
//                 </Switch>
//               </CSSTransition>
//             </TransitionGroup>
//           </div>
//         </div>
//       )}
//     />
//   </Router>
// );

// const NavLink = (props: any) => (
//   <li style={styles.navItem}>
//     <Link {...props} style={{ color: "inherit" }} />
//   </li>
// );

// const HSL = ({ match: { params } }: any) => (
//   <div
//     style={{
//       ...styles.fill,
//       ...styles.hsl,
//       background: `hsl(${params.h}, ${params.s}%, ${params.l}%)`,
//     }}
//   >
//     hsl({params.h}, {params.s}%, {params.l}%) hsl({params.h}, {params.s}%,{" "}
//     {params.l}%) hsl({params.h}, {params.s}%, {params.l}%) hsl({params.h},{" "}
//     {params.s}%, {params.l}%) hsl({params.h}, {params.s}%, {params.l}%) hsl(
//     {params.h}, {params.s}%, {params.l}%) hsl({params.h}, {params.s}%,{" "}
//     {params.l}%) hsl({params.h}, {params.s}%, {params.l}%)
//   </div>
// );

// const RGB = ({ match: { params } }: any) => (
//   <div
//     style={{
//       ...styles.fill,
//       ...styles.rgb,
//       background: `rgb(${params.r}, ${params.g}, ${params.b})`,
//     }}
//   >
//     rgb({params.r}, {params.g}, {params.b})
//   </div>
// );

// const styles: any = {};

// styles.fill = {
//   position: "absolute",
//   left: 0,
//   right: 0,
//   top: 0,
//   bottom: 0,
// };

// styles.content = {
//   ...styles.fill,
//   top: "40px",
//   textAlign: "center",
// };

// styles.nav = {
//   padding: 0,
//   margin: 0,
//   position: "absolute",
//   top: 0,
//   height: "40px",
//   width: "100%",
//   display: "flex",
// };

// styles.navItem = {
//   textAlign: "center",
//   flex: 1,
//   listStyleType: "none",
//   padding: "10px",
// };

// styles.hsl = {
//   ...styles.fill,
//   color: "white",
//   paddingTop: "20px",
//   fontSize: "30px",
// };

// styles.rgb = {
//   ...styles.fill,
//   color: "white",
//   paddingTop: "20px",
//   fontSize: "30px",
// };

// export default AnimationExample;
