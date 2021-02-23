import { FC, ReactElement } from "react";
import { Route, Redirect } from "react-router-dom";
import { getUserTokenStorage } from "../utils/storage";
import { IRoute } from "../type";

interface Props {
  routerConfig: Array<IRoute>;
  location?: any;
}

const FrontendAuth: FC<Props> = ({ routerConfig, location }): ReactElement => {
  const { pathname } = location;
  const isLogin = getUserTokenStorage();

  const targetRouterConfig: any = routerConfig.find(
    (item: IRoute) => item.path.replace(/\s*/g, "") === pathname
  );
  // eslint-disable-next-line no-console
  console.log(
    "targetRouterConfig:",
    targetRouterConfig,
    isLogin ? "login!" : "not login"
  );
  if (targetRouterConfig && targetRouterConfig.public && !isLogin) {
    console.log(
      "第一层",
      targetRouterConfig && targetRouterConfig.public && !isLogin
    );
    const { Component } = targetRouterConfig;
    return <Route exact path={pathname} component={Component} />;
  }

  if (isLogin) {
    console.log("以登陆 ⬇");
    // 如果是登陆状态，想要跳转到登陆，重定向到主页
    if (pathname === "/login") {
      return <Redirect to="/" />;
    }
    // 如果路由合法，就跳转到相应的路由
    if (targetRouterConfig) {
      const { redirect } = targetRouterConfig;
      if (redirect) {
        console.log("重定向", redirect.path);
        return (
          <Route
            path={redirect.path}
            key={redirect.path}
            component={redirect.Component}
          />
        );
      }
      return <Route path={pathname} component={targetRouterConfig.Component} />;
    }
    return <Redirect to="/notfound" />;
  } else {
    console.log("not login ", pathname);
    // 非登陆状态下，当路由合法时且需要权限校验时，跳转到登陆页面，要求登陆
    if (targetRouterConfig && !targetRouterConfig.public) {
      return <Redirect to="/login" />;
    }
    // 路由不合法时，重定向至 notfound
    return <Redirect to="/notfound" />;
  }
};

export default FrontendAuth;
