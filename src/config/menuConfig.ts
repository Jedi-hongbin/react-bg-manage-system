import { IRoute } from "../type";
import Dashboard from "../page/Dashboard";
import Role from "../page/Role";
import TodoList from "../page/TodoList";
import Palette from "../page/Palette";
import Copy from "../page/Study/Copy";
import ImageVideo from "../page/Study/ImageVideo";

export enum IRole {
  ADMIN = 0,
  Level1 = 1,
  Level2 = 2,
}
export interface MenuConfig {
  title?: string;
  path?: string;
  icon?: IconList;
  public?: boolean;
  role?: Array<IRole>;
  children?: Array<MenuConfig>;
  redirect?: string;
}

export enum IconList {
  Dashboard = "Dashboard",
  TodoList = "TodoList",
  Role = "Role",
  Palette = "Palette",
  Copy = "Copy",
  StudyIcon = "StudyIcon",
  ImageVideo = "ImageVideo",
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
    public: false,
    icon: IconList.Role,
    role: [IRole.ADMIN],
  },
  {
    path: "/palette",
    title: "Palette",
    public: true,
    icon: IconList.Palette,
  },
  {
    path: "/study",
    title: "Study",
    public: true,
    icon: IconList.StudyIcon,
    children: [
      {
        path: "/study/copy",
        title: "Copy",
        public: true,
        icon: IconList.Copy,
      },
      {
        path: "/study/360",
        title: "360",
        public: true,
        icon: IconList.ImageVideo,
      },
    ],
  },
];

export default menuList;

export const routes: Array<IRoute> = [
  { path: "/todoList", Component: TodoList, public: true },
  { path: "/role", Component: Role, public: false },
  { path: "/dashboard", Component: Dashboard, public: true },
  { path: "/palette", Component: Palette, public: true },
  { path: "/study/copy", Component: Copy, public: true },
  { path: "/study/360", Component: ImageVideo, public: true },
];
