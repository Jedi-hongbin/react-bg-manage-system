import React, { FC, ReactElement, useState, useCallback } from "react";
import Content from "./Content";
import Header from "./Header";
import Sider from "./Sider";
import { Container, Layout } from "./styled";

interface IProps {}

const Admin: FC<IProps> = (): ReactElement => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = useCallback(() => {
    setCollapsed((status) => !status);
  }, []);

  return (
    <Container>
      <Layout>
        <Sider collapsed={collapsed} />
        <Layout>
          <Header collapsed={collapsed} toggleCollapsed={toggleCollapsed} />
          <Content />
        </Layout>
      </Layout>
    </Container>
  );
};
export default Admin;
