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
/**
 * 这样图标的名称指定到IconList中定义的才行，
 * 防止route定义的icon属性和MenuIcon的属性出现误差导致出错
 */
export default MenuIcon;
