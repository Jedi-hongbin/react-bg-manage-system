import React, { ReactElement } from "react";
import { Tooltip as MaterialTooltip } from "@material-ui/core";

interface Props {
  title: string;
  children: ReactElement<any, any>;
}

const Tooltip: React.FC<Props> = ({ title, children }) => {
  return <MaterialTooltip title={title}>{children}</MaterialTooltip>;
};
export default Tooltip;
