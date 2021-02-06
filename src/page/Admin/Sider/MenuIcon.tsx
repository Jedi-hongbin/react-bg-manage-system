import {
  Dashboard,
  FormatListBulleted,
  AccessibilityNew,
} from "@material-ui/icons";
import { IconList } from "../../../config/menuConfig";

const DashboardIcon = <Dashboard style={{ fontSize: 24 }} />;
const TodoListIcon = <FormatListBulleted style={{ fontSize: 24 }} />;
const RoleIcon = <AccessibilityNew style={{ fontSize: 24 }} />;

const MenuIcon: { [icon: string]: JSX.Element } = {
  [IconList.Dashboard]: DashboardIcon,
  [IconList.TodoList]: TodoListIcon,
  [IconList.Role]: RoleIcon,
};

export default MenuIcon;
