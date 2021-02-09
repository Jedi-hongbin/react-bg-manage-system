import styled, { css } from "styled-components";
import { Layout as AntDLayout, Menu as AntDMenu } from "antd";
import { BetweenCenter, themeBackground, themePrimaryColor } from "./styled";
import { NavLink as MyNavLink } from "react-router-dom";
import { Theme } from "../redux/types";
import { AlignItems, JustifyContentProps } from "../type";

export const shadowbox = css`
  ${themeBackground};
  color: ${(props) => props.theme.palette.text.primary};
  box-shadow: ${(props) => props.theme.shadows[2]};
`;

export const Layout = styled(AntDLayout)`
  height: 100vh;
  background-color: ${(props) => props.theme.palette.background.default};
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

/* ${themeSecondBackground}; */
/* background-color: ${(props) => props.theme.colors.secondBg}; */
/* ${shadowbox}; */

export const Footer = styled(Layout.Footer)`
  background-color: ${(props) => props.theme.palette.background.default};
  color: ${(props) => props.theme.palette.text.primary};
  ${shadowbox};
  z-index: 2;
`;

export const Menu = styled(AntDMenu)`
  background-color: ${(props) => props.theme.palette.background.default};
  color: ${(props) => props.theme.palette.text.primary}!important;
`;

export const MenuItem = styled(Menu.Item)`
  background-color: ${(props) => props.theme.palette.background.default};
  display: flex;
  align-items: center;

  &.ant-menu-item-selected {
    ${themePrimaryColor};
    background-color: ${(props) =>
      props.theme.palette.action.selected} !important;
  }
`;

export const NavLink = styled(MyNavLink)`
  color: ${(props) => props.theme.palette.text.primary}!important;

  &.active {
    ${themePrimaryColor};
  }
`;
/* color: ${(props) => props.theme.colors.primary}!important; */
