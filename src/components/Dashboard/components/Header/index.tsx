import React from "react";
import { StyledHeader } from "../../commonStyled";
import CollapsedIcon from "./CollapsedIcon";
import SignOut from "./SignOut";
import Notification from "./Notification";
import { UserInfo } from "./styled";

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
        <SignOut />
      </UserInfo>
    </StyledHeader>
  );
};

export default Header;
