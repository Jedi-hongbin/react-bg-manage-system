import { FC, ReactElement } from "react";
import Tooltip from "../UI/Tooltip";

type IProps = (Component: FC<any>, title: string) => () => ReactElement;

const withTooltip: IProps = (Component, title) => () => {
  return (
    <Tooltip title={title}>
      <Component />
    </Tooltip>
  );
};

export default withTooltip;
