import React, {
  FC,
  ReactElement,
  useState,
  useCallback,
  useLayoutEffect,
} from "react";
import { Layout } from "../../constants/LayoutStyled";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import Sider from "./Sider";
import { useHistory } from "react-router-dom";
import { log } from "../../utils/logger";
import menuList from "../../config/menuConfig";

interface IProps {}

const Admin: FC<IProps> = (): ReactElement => {
  const {
    location: { pathname },
    replace,
  } = useHistory();
  const [collapsed, setCollapsed] = useState(false);

  const routerRedirect = useCallback(() => {
    log("pathname:", pathname);
    if (pathname === "/") {
      replace("dashboard");
      log("replace dashboard");
    } else {
      const hasRouter =
        menuList.findIndex((menu) => menu.path === pathname) !== -1;
      if (!hasRouter) {
        replace("/notfound");
      }
    }
  }, [pathname, replace]);

  useLayoutEffect(routerRedirect, [routerRedirect]);

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
export default Admin;
