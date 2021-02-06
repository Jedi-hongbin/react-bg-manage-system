import React from "react";
import CollapsedIcon from "./CollapsedIcon";
import SignOut from "./SignOut";
import Notification from "./Notification";
import { UserInfo } from "./styled";
import { Header as StyledHeader } from "../../../constants/LayoutStyled";
import ThemeToggle from "./ThemeToggle";
import Avatar from "./Avatar";

interface Props {
  collapsed: boolean;
  toggleCollapsed: () => void;
}

const Header: React.FC<Props> = ({ collapsed, toggleCollapsed }) => {
  return (
    <StyledHeader>
      <CollapsedIcon collapsed={collapsed} toggleCollapsed={toggleCollapsed} />
      <UserInfo>
        <Notification />
        <ThemeToggle />
        <SignOut />
        <Avatar />
      </UserInfo>
    </StyledHeader>
  );
};

export default Header;
