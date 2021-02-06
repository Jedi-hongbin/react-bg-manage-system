export interface MenuConfig {
  title?: string;
  path: string;
  icon?: IconList;
  public?: boolean;
  children?: Array<MenuConfig>;
}

export enum IconList {
  Dashboard = "Dashboard",
  TodoList = "TodoList",
  Role = "Role",
}

const menuList: Array<MenuConfig> = [
  {
    path: "/dashboard", // 对应的path
    title: "Dashboard", // 菜单标题名称
    icon: IconList.Dashboard, // 图标名称
    public: true,
  },
  {
    path: "/todoList",
    title: "TodoList",
    public: true,
    icon: IconList.TodoList,
  },
  {
    path: "/role",
    title: "Role",
    public: true,
    icon: IconList.Role,
  },
];
export default menuList;
