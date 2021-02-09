import React, { FC, ReactElement, useCallback, useMemo } from "react";
import {
  Menu,
  MenuItem,
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
      <MenuItem
        key={path}
        title={title}
        icon={MenuIcon[IconList[icon as IconList]]}
      >
        {/* icon as IconList
          icon 可能是undefined 所以指定IconList 不报错
        */}
        <NavLink to={{ pathname: path }}>{title}</NavLink>
      </MenuItem>
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
