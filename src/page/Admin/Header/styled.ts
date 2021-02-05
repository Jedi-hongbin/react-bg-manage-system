import styled, { css } from "styled-components";
import { BetweenCenter } from "../../../constants/styled";
import { ExitToApp as ExitToAppIcon } from "@material-ui/icons";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  BellOutlined,
} from "@ant-design/icons";
import { Layout } from "antd";

export const UserInfo = styled.div`
  min-width: 5rem;
  ${BetweenCenter}
`;

const icon = css`
  color: #999;
  font-size: 1.2rem;
  transition: 0.2s all linear;

  &:hover {
    color: ${(props) => props.theme.color.fc};
  }
`;

export const BellIcon = styled(BellOutlined)`
  ${icon}
`;
export const UnfoldIcon = styled(MenuUnfoldOutlined)`
  ${icon}
`;
export const FoldOutIcon = styled(MenuFoldOutlined)`
  ${icon}
`;
export const SignOutIcon = styled(ExitToAppIcon)`
  ${icon}
`;

export const Header = styled(Layout.Header)`
  display: flex;
  ${BetweenCenter};
  box-shadow: 2px 0px 2px 2px #ccc;
  background-color: ${(props) => props.theme.color.bg};
`;
