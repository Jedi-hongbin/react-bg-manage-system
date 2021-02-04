import React, { useMemo } from "react";
import Tooltip from "../../../components/UI/Tooltip";
import { UnfoldIcon, FoldOutIcon } from "./styled";

interface CollapsedIconProps {
  collapsed: boolean;
  toggleCollapsed: () => void;
}

const CollapsedIcon: React.FC<CollapsedIconProps> = ({
  collapsed,
  toggleCollapsed,
}) => {
  const MenuIcon = useMemo(
    () =>
      collapsed ? (
        <UnfoldIcon onClick={toggleCollapsed} />
      ) : (
        <FoldOutIcon onClick={toggleCollapsed} />
      ),
    [collapsed, toggleCollapsed]
  );

  const title = useMemo(() => (collapsed ? "unfold" : "Fold"), [collapsed]);

  return <Tooltip title={title}>{MenuIcon}</Tooltip>;
};
export default CollapsedIcon;
