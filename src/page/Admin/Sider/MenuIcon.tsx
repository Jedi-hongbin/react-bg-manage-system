import {
  Dashboard,
  FormatListBulleted,
  AccessibilityNew,
  Palette as PaletteIcon,
  FileCopy,
  EventNote,
  ThreeDRotation,
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

//className : anticon anticon-ci 防止收缩模式出现文字显示（antd-icon没有问题，自定义icon需要加上）
const StudyIcon = styled(EventNote).attrs({
  className: "anticon anticon-ci",
})`
  ${IconStyled};
`;

const Copy = styled(FileCopy)`
  ${IconStyled};
`;

const ImageVideo = styled(ThreeDRotation)`
  ${IconStyled};
`;

const MenuIcon: {
  [icon: string]: ReactElement;
} = {
  [IconList.Dashboard]: <DashboardIcon />,
  [IconList.TodoList]: <TodoListIcon />,
  [IconList.Role]: <RoleIcon />,
  [IconList.Palette]: <Palette />,
  [IconList.Copy]: <Copy />,
  [IconList.StudyIcon]: <StudyIcon />,
  [IconList.ImageVideo]: <ImageVideo />,
};
/**
 * 这样图标的名称指定到IconList中定义的才行，
 * 防止route定义的icon属性和MenuIcon的属性出现误差导致出错
 */
export default MenuIcon;
