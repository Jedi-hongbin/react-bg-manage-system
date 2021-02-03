import styled, { css } from "styled-components";
import { BetweenCenter } from "../../../../constants/styled";
import { ExitToApp as ExitToAppIcon } from "@material-ui/icons";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  BellOutlined,
} from "@ant-design/icons";

export const UserInfo = styled.div`
  min-width: 5rem;
  ${BetweenCenter}
`;

const icon = css`
  color: #999;
  font-size: 1.2rem;
  transition: 0.2s all linear;

  &:hover {
    color: #fff;
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
