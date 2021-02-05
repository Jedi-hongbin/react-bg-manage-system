import styled from "styled-components";
import { Layout as AntDLayout, Menu as AntDMenu } from "antd";
import { BetweenCenter, Div } from "./styled";
import { NavLink as MyNavLink } from "react-router-dom";

export const Layout = styled(AntDLayout)`
  height: 100vh;
  background-color: ${(props) => props.theme.color.bg};
`;

export const Sider = styled(Layout.Sider)`
  background-color: ${(props) => props.theme.color.bg};
  /* box-shadow: 0px -1px 20px 1px #ddd; */
`;

export const Header = styled(Layout.Header)`
  display: flex;
  ${BetweenCenter};
  background-color: ${(props) => props.theme.color.bg};
  box-shadow: -2px 0 20px 1px ${(props) => props.theme.color.secondBg};
  color: ${(props) => props.theme.color.fc};
`;
export const Content = styled(Layout.Content)`
  position: relative;
  margin: 10px;
  padding: 0;
  display: flex;
`;
export const Footer = styled(Layout.Footer)`
  background-color: ${(props) => props.theme.color.bg};
  box-shadow: -2px 0 20px 1px ${(props) => props.theme.color.secondBg};
  color: ${(props) => props.theme.color.fc};
`;
export const Menu = styled(AntDMenu)`
  background-color: ${(props) => props.theme.color.bg};
  color: ${(props) => props.theme.color.fc}!important;
`;

export const NavLink = styled(MyNavLink)`
  color: ${(props) => props.theme.color.fc}!important;

  &.active {
    color: ${(props) => props.theme.color.primary}!important;
  }
`;
/* color: ${(props) => props.theme.color.primary}!important; */

export const ContentContainer = styled(Div)`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: ${(props) => props.theme.color.secondBg};
  color: ${(props) => props.theme.color.fc};
`;
