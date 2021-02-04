import React, { FC, ReactElement } from "react";
import { Sider as StyledSider } from "../styled";
import Logo from "./Logo";

interface IProps {
  collapsed: boolean;
}

const Sider: FC<IProps> = ({ collapsed }): ReactElement => {
  return (
    <StyledSider trigger={null} collapsible collapsed={collapsed}>
      <Logo collapsed={collapsed} />
      {/* <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          nav 1
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          nav 2
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
          nav 3
        </Menu.Item>
      </Menu> */}
    </StyledSider>
  );
};
export default Sider;
