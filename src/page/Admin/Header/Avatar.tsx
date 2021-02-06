import React, { FC, ReactElement } from "react";
import { Avatar as MaterialAvatar } from "./styled";
interface IProps {}

const Avatar: FC<IProps> = (): ReactElement => {
  return <MaterialAvatar variant="rounded">hb</MaterialAvatar>;
};

export default Avatar;
