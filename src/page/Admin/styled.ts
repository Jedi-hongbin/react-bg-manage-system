import { Layout as AntDLayout } from "antd";
import styled from "styled-components";
import { BetweenCenter } from "../../constants/styled";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
`;

export const Layout = styled(AntDLayout)`
  height: 100vh;
`;

export const Sider = styled(AntDLayout.Sider)``;

export const StyledHeader = styled(AntDLayout.Header)`
  display: flex;
  ${BetweenCenter};
`;
export const StyledContent = styled(AntDLayout.Content)`
  margin: 24px 16px;
  padding: 24px;
`;
export const StyledFooter = styled(AntDLayout.Footer)`
  background-color: ${(props) => props.theme.color.bg};
  box-shadow: -1px 0 20px 1px #ddd;
`;
