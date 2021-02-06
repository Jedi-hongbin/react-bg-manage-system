import React, { FC, ReactElement, useCallback, useMemo } from "react";
import {
  Menu,
  Sider as StyledSider,
  NavLink,
} from "../../../constants/LayoutStyled";
import Logo from "./Logo";
import menuList, { IconList, MenuConfig } from "../../../config/menuConfig";
import { useLocation } from "react-router-dom";
import MenuIcon from "./MenuIcon";
interface IProps {
  collapsed: boolean;
}

const Sider: FC<IProps> = ({ collapsed }): ReactElement => {
  const { pathname } = useLocation();
  const selectedMenuIndex = useMemo(() => pathname, [pathname]);

  const renderMenuItem = useCallback((menu: MenuConfig) => {
    const { path, title, icon } = menu;
    return (
      <Menu.Item
        key={path}
        title={title}
        style={{
          display: "flex",
          alignItems: "center",
        }}
        icon={MenuIcon[IconList[icon as IconList]]}
      >
        <NavLink to={{ pathname: path }}>{title}</NavLink>
      </Menu.Item>
    );
  }, []);

  return (
    <StyledSider trigger={null} collapsible collapsed={collapsed}>
      <Logo />
      <Menu selectedKeys={[selectedMenuIndex]}>
        {menuList.map(renderMenuItem)}
      </Menu>
    </StyledSider>
  );
};
export default Sider;
