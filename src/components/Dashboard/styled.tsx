import { Layout as AntDLayout, Menu } from "antd";
import styled from "styled-components";
import { BetweenCenter } from "../../constants/styled";

const { Content } = AntDLayout;

export const Layout = styled(AntDLayout)`
  height: 100vh;
`;

export const Sider = styled(AntDLayout.Sider)``;

export const StyledHeader = styled(AntDLayout.Header)`
  display: flex;
  ${BetweenCenter};
`;
