import React, { FC, ReactElement } from "react";
import {
  Menu,
  Sider as StyledSider,
  NavLink,
} from "../../../constants/LayoutStyled";
import Logo from "./Logo";
import menuConfig, { MenuConfig } from "../../../config/menuConfig";
import DashboardIcon from "@material-ui/icons/Dashboard";
interface IProps {
  collapsed: boolean;
}

const Sider: FC<IProps> = ({ collapsed }): ReactElement => {
  return (
    <StyledSider trigger={null} collapsible collapsed={collapsed}>
      <Logo collapsed={collapsed} />
      <Menu>
        {menuConfig.map((menu: MenuConfig) => {
          const { path, title } = menu;
          return (
            <Menu.Item key={path} title={title} icon={<DashboardIcon />}>
              <NavLink to={{ pathname: path }}>{title}</NavLink>
            </Menu.Item>
          );
        })}

        {/* <Menu.Item key="1" icon={<UserOutlined />}>
          <NavLink to={{ pathname: "/todoList" }} />
        </Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined />}>
          nav 2
        </Menu.Item> */}
      </Menu>
    </StyledSider>
  );
};
export default Sider;
