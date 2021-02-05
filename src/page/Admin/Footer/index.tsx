import React, { FC, ReactElement } from "react";
import { Footer as StyledFooter } from "../../../constants/LayoutStyled";

interface IProps {}

const Footer: FC<IProps> = (): ReactElement => {
  return <StyledFooter>Footer</StyledFooter>;
};
export default Footer;
