export interface MenuConfig {
  title?: string;
  path: string;
  icon?: string;
  public?: boolean;
  children?: Array<MenuConfig>;
}

const menuList: Array<MenuConfig> = [
  {
    path: "/dashboard", // 对应的path
    title: "Dashboard", // 菜单标题名称
    icon: "DashboardOutlined", // 图标名称
    public: true,
  },
  {
    path: "/todoList",
    title: "TodoList",
    public: true,
    icon: "UnorderedListOutlined",
  },
  {
    path: "/role",
    title: "Role",
    public: true,
    icon: "UserSwitchOutlined",
  },
];
export default menuList;
