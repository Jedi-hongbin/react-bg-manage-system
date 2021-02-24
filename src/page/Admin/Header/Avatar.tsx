import React, { FC, ReactElement } from "react";
import { Avatar as MaterialAvatar } from "../../../components/UI/Avatar";

interface Props {
  username: string;
}

const Avatar: FC<Props> = ({ username }): ReactElement | null =>
  username ? (
    <MaterialAvatar variant="rounded">{username.substr(0, 1)}</MaterialAvatar>
  ) : null;
export default Avatar;
