import React from "react";
import TransitionRoute from "../../Route/TransitionRoute";
import UserManagement from "./page/UserManagement";
import { StyledContent } from "./commonStyled";
// import { Button } from "@material-ui/core";

interface Props {}

const routes = [
  {
    path: "/dashboard/user-management",
    name: "user-management",
    Component: UserManagement,
  },
];
const Content: React.FC<Props> = () => {
  return (
    <StyledContent>
      <TransitionRoute routes={routes} />
    </StyledContent>
  );
};
export default Content;
