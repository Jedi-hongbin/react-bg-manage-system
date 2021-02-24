import React from "react";
import CollapsedIcon from "./CollapsedIcon";
import SignOut from "./SignOut";
import Notification from "./Notification";
import { RightRegion } from "./styled";
import { Header as StyledHeader } from "../../../constants/LayoutStyled";
import ThemeToggle from "./ThemeToggle";
import Avatar from "./Avatar";
import FullScreenIcon from "./FullScreenIcon";
import { useUserInfo } from "../../../server/userAuthContext";

interface Props {
  collapsed: boolean;
  toggleCollapsed: () => void;
}

const Header: React.FC<Props> = ({ collapsed, toggleCollapsed }) => {
  const [user] = useUserInfo();

  return (
    <StyledHeader>
      <CollapsedIcon collapsed={collapsed} toggleCollapsed={toggleCollapsed} />
      <RightRegion>
        <FullScreenIcon />
        <Notification />
        <ThemeToggle />
        <SignOut />
        <Avatar username={user?.name} />
      </RightRegion>
    </StyledHeader>
  );
};

export default Header;
