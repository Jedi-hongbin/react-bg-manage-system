import React, { FC, ReactElement } from "react";
import { Avatar as MaterialAvatar, AvatarProps } from "@material-ui/core";

export const Avatar: FC<AvatarProps> = (props): ReactElement => {
  return <MaterialAvatar {...props}>{props.children}</MaterialAvatar>;
};
