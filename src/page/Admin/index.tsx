import React, { FC, ReactElement, useState, useCallback } from "react";
import { Layout } from "../../constants/LayoutStyled";
// import withRouteMonitor from "../../utils/routemonitor/withRouteMonitor";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import Sider from "./Sider";

interface IProps {}

const Admin: FC<IProps> = (): ReactElement => {
  const [collapsed, setCollapsed] = useState(false);
  const findIndexCallback = useCallback(
    (pathname: string) => (menu: any) => {
      if (menu.children) {
        return menu.children.findIndex(findIndexCallback(pathname)) !== -1;
      }
      return menu.path === pathname;
    },
    []
  );

  const toggleCollapsed = useCallback(() => {
    setCollapsed((status) => !status);
  }, []);

  return (
    <Layout>
      <Sider collapsed={collapsed} />
      <Layout>
        <Header collapsed={collapsed} toggleCollapsed={toggleCollapsed} />
        <Content />
        <Footer />
      </Layout>
    </Layout>
  );
};

// export default withRouteMonitor(Admin);
export default Admin;
