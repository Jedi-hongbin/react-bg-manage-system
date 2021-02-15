import { MenuConfig } from "./../../config/menuConfig";

const findIndexCallback = (pathname: string) => (menu: any) => {
  if (menu.children) {
    return menu.children.findIndex(findIndexCallback(pathname)) !== -1;
  }
  return menu.path === pathname;
};

export function routerMonitor(
  menuList: Array<MenuConfig>,
  pathname: string,
  replace: (path: string) => void
) {
  if (pathname === "/") {
    replace("/dashboard");
  } else {
    const hasRouterIndex = menuList.findIndex(findIndexCallback(pathname));
    if (hasRouterIndex === -1) {
      replace("/notfound");
    }
  }
}
