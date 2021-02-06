import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Route, Switch, useLocation } from "react-router-dom";
import { IRoute } from "../type";
import "./TransitionStyle.css";

interface TransitionRouteProps {
  routes: Array<IRoute>;
}

const renderRoute = ({ path, Component }: IRoute) => (
  <Route key={path} path={path} component={Component}></Route>
);

const TransitionRoute: React.FC<TransitionRouteProps> = ({ routes }): any => {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="fade" timeout={300}>
        <Switch>{routes.map(renderRoute)}</Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default TransitionRoute;
// import React, { useCallback } from "react";
// import { CSSTransition } from "react-transition-group";
// import { Route } from "react-router-dom";

// interface TransitionRouteProps {
//   routes: Array<{
//     path: string;
//     name: string;
//     Component: any;
//   }>;
// }
// const TransitionRoute: React.FC<TransitionRouteProps> = ({ routes }): any => {
//   const renderRoute = useCallback(
//     ({ path, Component }: any) => (
//       <Route key={path} exact path={path}>
//         {({ match }) => (
//           <CSSTransition
//             in={match != null}
//             timeout={300}
//             classNames="page"
//             unmountOnExit
//           >
//             <Component />
//           </CSSTransition>
//         )}
//       </Route>
//     ),
//     []
//   );
//   return routes.map(renderRoute);
// };
// export default TransitionRoute;
