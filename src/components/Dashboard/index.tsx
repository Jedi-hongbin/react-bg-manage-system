import React, { useCallback, useState } from "react";
import { Layout as AntDLayout, Menu } from "antd";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import styled from "styled-components";
import Logo from "./Logo";
import Header from "./components/Header";
import Content from "./Content";
import { Container, Layout } from "./commonStyled";

const Sider = styled(AntDLayout.Sider)``;

interface Props {}

const Dashboard: React.FC<Props> = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = useCallback(() => {
    setCollapsed((status) => !status);
  }, []);

  return (
    <Container>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <Logo collapsed={collapsed} />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              nav 1
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              nav 2
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              nav 3
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header collapsed={collapsed} toggleCollapsed={toggleCollapsed} />
          <Content />
        </Layout>
      </Layout>
    </Container>
  );
};
export default Dashboard;
