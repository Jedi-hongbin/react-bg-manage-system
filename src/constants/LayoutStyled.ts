import styled, { css } from "styled-components";
import { Layout as AntDLayout, Menu as AntDMenu } from "antd";
import { BetweenCenter } from "./styled";
import { NavLink as MyNavLink } from "react-router-dom";

export const shadowbox = css`
  background-color: ${(props) => props.theme.colors.bg};
  color: ${(props) => props.theme.colors.fc};
  box-shadow: 0 0 10px 1px ${(props) => props.theme.colors.shadow};
`;

export const Layout = styled(AntDLayout)`
  height: 100vh;
  background-color: ${(props) => props.theme.colors.bg};
`;

export const Sider = styled(Layout.Sider)`
  background-color: ${(props) => props.theme.colors.bg};
  /* box-shadow: 0px -1px 20px 1px #ddd; */
`;

export const Header = styled(Layout.Header)`
  display: flex;
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
  ${shadowbox};
  background-color: ${(props) => props.theme.colors.secondBg};
  /* color: ${(props) => props.theme.colors.fc}; */
`;

export const Footer = styled(Layout.Footer)`
  background-color: ${(props) => props.theme.colors.bg};
  color: ${(props) => props.theme.colors.fc};
  ${shadowbox};
`;

export const Menu = styled(AntDMenu)`
  background-color: ${(props) => props.theme.colors.bg};
  color: ${(props) => props.theme.colors.fc}!important;
`;

export const NavLink = styled(MyNavLink)`
  color: ${(props) => props.theme.colors.fc}!important;

  &.active {
    color: ${(props) => props.theme.colors.primary}!important;
  }
`;
/* color: ${(props) => props.theme.colors.primary}!important; */
