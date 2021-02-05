import React, { FC, ReactElement } from "react";
import { IRoute } from "../../../type";
import TransitionRoute from "../../../Route/TransitionRoute";
import Dashboard from "../../Dashboard";
import Role from "../../Role";
import TodoList from "../../TodoList";
import { Content as StyledContent } from "../../../constants/LayoutStyled";

interface IProps {}

const routes: Array<IRoute> = [
  { path: "/todoList", Component: TodoList },
  { path: "/role", Component: Role },
  { path: "/dashboard", Component: Dashboard },
];
const Content: FC<IProps> = (): ReactElement => {
  return (
    <StyledContent>
      <TransitionRoute routes={routes} />
      {/* {routes.map(renderRoute)} */}
    </StyledContent>
  );
};
export default Content;

/* <Route
  render={({ location }) => (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="page" timeout={300}>
        <Switch location={location}>{routes.map(renderRoute)}</Switch>
      </CSSTransition>
    </TransitionGroup>
  )}
/> */
