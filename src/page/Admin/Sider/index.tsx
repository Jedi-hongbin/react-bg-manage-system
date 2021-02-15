import React, { FC, ReactElement, useCallback, useMemo } from "react";
import {
  Menu,
  MenuItem,
  Sider as StyledSider,
  NavLink,
  SubMenu,
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
  const selectedKeys = useMemo(() => pathname, [pathname]);
  const defaultOpenKeys = useMemo(() => pathname, [pathname]);

  const renderMenuItem = useCallback((menu: MenuConfig) => {
    const { path, title, icon, children } = menu;
    if (children) {
      return (
        <SubMenu
          key={path as string}
          icon={MenuIcon[IconList[icon as IconList]]}
          title={title}
        >
          {children.map(renderMenuItem)}
        </SubMenu>
      );
    }
    return (
      <MenuItem
        key={path}
        title={title}
        icon={MenuIcon[IconList[icon as IconList]]}
      >
        <NavLink to={{ pathname: path }}>{title}</NavLink>
      </MenuItem>
    );
  }, []);

  return (
    <StyledSider trigger={null} collapsible collapsed={collapsed}>
      <Logo />
      <Menu
        mode="inline"
        selectedKeys={[selectedKeys]}
        defaultOpenKeys={[defaultOpenKeys]}
      >
        {menuList.map(renderMenuItem)}
      </Menu>
    </StyledSider>
  );
};
export default Sider;
