import {
  Dashboard,
  FormatListBulleted,
  AccessibilityNew,
  Palette as PaletteIcon,
} from "@material-ui/icons";
import { IconList } from "../../../config/menuConfig";

import styled, { css } from "styled-components";
import { ReactElement } from "react";

const IconStyled = css`
  font-size: 1.2rem !important;
`;

const DashboardIcon = styled(Dashboard)`
  ${IconStyled};
`;

const TodoListIcon = styled(FormatListBulleted)`
  ${IconStyled};
`;

const RoleIcon = styled(AccessibilityNew)`
  ${IconStyled};
`;

const Palette = styled(PaletteIcon)`
  ${IconStyled};
`;

const MenuIcon: {
  [icon: string]: ReactElement;
} = {
  [IconList.Dashboard]: <DashboardIcon />,
  [IconList.TodoList]: <TodoListIcon />,
  [IconList.Role]: <RoleIcon />,
  [IconList.Palette]: <Palette />,
};
/**
 * 这样图标的名称指定到IconList中定义的才行，
 * 防止route定义的icon属性和MenuIcon的属性出现误差导致出错
 */
export default MenuIcon;
