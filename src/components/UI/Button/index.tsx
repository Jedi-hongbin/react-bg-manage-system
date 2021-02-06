import { Button as MaterialButton, ButtonProps } from "@material-ui/core";

import React, { FC, ReactElement } from "react";

export const Button: FC<ButtonProps> = (props): ReactElement => {
  return <MaterialButton {...props}> {props.children} </MaterialButton>;
};
