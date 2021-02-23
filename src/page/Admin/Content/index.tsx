import React, { FC, ReactElement } from "react";
import TransitionRoute from "../../../Route/TransitionRoute";
import { Content as StyledContent } from "../../../constants/LayoutStyled";
import { routes } from "../../../config/menuConfig";

interface IProps {}
console.log(process.env);
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
