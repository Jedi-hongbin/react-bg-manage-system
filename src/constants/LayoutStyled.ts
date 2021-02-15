import styled, { css } from "styled-components";
import { Layout as AntDLayout, Menu as AntDMenu } from "antd";
import {
  BetweenCenter,
  themeBackground,
  themePrimaryColor,
  themeFontColor,
  themeDefaultBackgroundAndColor,
} from "./styled";
import { NavLink as MyNavLink } from "react-router-dom";
import { Theme } from "../redux/types";
import { AlignItems, JustifyContentProps } from "../type";
import {
  PrimaryColors,
  Primary,
  ActionColors,
  Action,
  TextColors,
  Text,
} from "../theme/colorsHelper";

export const shadowbox = css`
  ${themeDefaultBackgroundAndColor};
  box-shadow: ${(props) => props.theme.shadows[2]};
`;

export const Layout = styled(AntDLayout)`
  ${themeBackground};
  height: 100vh;
`;

export const Sider = styled(Layout.Sider)`
  ${shadowbox};
  z-index: 3;
  /* 3 比 footer 的2 高，确保不被footer遮盖 */
`;

export const Header = styled(Layout.Header)`
  display: flex;
  z-index: 2;
  ${BetweenCenter};
  ${shadowbox};
`;

export const Content = styled(Layout.Content)`
  position: relative;
  margin: 10px;
  padding: 0;
  display: flex;
`;

type ColorType = "default" | "paper";
interface FlexDivProps {
  width?: string;
  height?: string;
  flex?: number;
  container?: any;
  color?: ColorType;
  theme?: Theme;
  justify?: JustifyContentProps;
  alignItems?: AlignItems;
  Wrap?: any;
  Nowrap?: any;
}

export const flexDiv = styled.div`
  display: ${(props: FlexDivProps) => (props.container ? "flex" : undefined)};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  flex: ${(props) => props.flex};
  background-color: ${(props) =>
    props.color ? props.theme.palette!.background?.[props.color] : undefined};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.alignItems};
  flex-wrap: ${(props) =>
    props.Wrap ? "wrap" : props.Nowrap ? "nowrap" : undefined};
`;

export const ContentContainer = styled(flexDiv)((props) => ({
  width: "100%",
  height: "100%",
  position: "absolute",
  color: props.theme.palette.text.primary,
}));

export const Footer = styled(Layout.Footer)`
  ${shadowbox};
  z-index: 2;
`;

export const Menu = styled(AntDMenu)`
  ${themeDefaultBackgroundAndColor};
  border-color: transparent;
`;

const MenuItemCss = css`
  ${themeBackground};
  display: flex;
  align-items: center;

  &::after {
    border-right-color: ${PrimaryColors(Primary.main)} !important;
  }

  &.ant-menu-item-active,
  &.ant-menu-item-selected {
    ${themePrimaryColor};
    background-color: ${ActionColors(Action.selected)} !important;
  }
`;

export const MenuItem = styled(Menu.Item)`
  ${MenuItemCss}
`;

const AntdTransition = css`
  transition: 0.3s background ease;
`;

export const SubMenu = styled(AntDMenu.SubMenu)`
  ${themeBackground};
  ${AntdTransition};
  &.ant-menu-submenu-selected {
    ${themePrimaryColor};
  }

  & > .ant-menu-submenu-title {
    display: flex;
    align-items: center;

    &:hover {
      ${themePrimaryColor};
      background-color: ${(props) =>
        props.theme.palette.action.selected} !important;
    }
  }
  .ant-menu-inline {
    ${AntdTransition};
    background-color: transparent !important;
    ${themeFontColor}
  }
  .ant-menu-submenu-arrow {
    color: ${TextColors(Text.primary)};
  }
`;

export const NavLink = styled(MyNavLink)`
  color: ${TextColors(Text.primary)} !important;

  &.active {
    ${themePrimaryColor};
  }
  &:hover {
    ${themePrimaryColor};
  }
`;
