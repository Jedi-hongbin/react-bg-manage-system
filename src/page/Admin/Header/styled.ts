import styled, { css } from "styled-components";
import { BetweenCenter } from "../../../constants/styled";
import {
  ExitToApp as ExitToAppIcon,
  BrightnessHigh,
  Brightness4,
} from "@material-ui/icons";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  BellOutlined,
} from "@ant-design/icons";
import { Avatar as MaterialAvatar } from "@material-ui/core";

export const UserInfo = styled.div`
  min-width: 10rem;
  ${BetweenCenter}
`;

const icon = css`
  color: #999;
  font-size: 1.2rem;
  transition: 0.2s all linear;

  &:hover {
    color: ${(props) => props.theme.palette.text.primary};
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
export const LightIcon = styled(BrightnessHigh)`
  ${icon}
`;
export const DarkIcon = styled(Brightness4)`
  ${icon}
`;
