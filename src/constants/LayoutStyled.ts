import styled, { css } from "styled-components";
import { Layout as AntDLayout, Menu as AntDMenu } from "antd";
import { BetweenCenter } from "./styled";
import { NavLink as MyNavLink } from "react-router-dom";

export const shadowbox = css`
  background-color: ${(props) => props.theme.palette.background.default};
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
  /* 3 比 footer 的2 高， */
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

export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  color: ${(props) => props.theme.palette.text.primary};
`;
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

export const NavLink = styled(MyNavLink)`
  color: ${(props) => props.theme.palette.text.primary}!important;

  &.active {
    color: ${(props) => props.theme.palette.primary.main}!important;
  }
`;
/* color: ${(props) => props.theme.colors.primary}!important; */
