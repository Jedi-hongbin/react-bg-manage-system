import React from "react";
import Tooltip from "../../../components/UI/Tooltip";
import { SignOutIcon } from "./styled";
import { useHistory } from "react-router-dom";

interface Props {}

const SignOut: React.FC<Props> = () => {
  const { replace } = useHistory();
  return (
    <Tooltip title="sign out">
      <SignOutIcon onClick={() => replace("/login")} />
    </Tooltip>
  );
};
export default SignOut;
