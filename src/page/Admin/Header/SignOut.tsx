import { FC, ReactElement, useCallback } from "react";
import Tooltip from "../../../components/UI/Tooltip";
import { SignOutIcon } from "./styled";
import { useHistory } from "react-router-dom";
// import { clearUserTokenStorage } from "../../../utils/storage";

const SignOut: FC = (): ReactElement => {
  const { replace } = useHistory();

  const signOut = useCallback(() => {
    // clearUserTokenStorage();
    replace("/login");
  }, [replace]);

  return (
    <Tooltip title="sign out">
      <SignOutIcon onClick={signOut} />
    </Tooltip>
  );
};

export default SignOut;
