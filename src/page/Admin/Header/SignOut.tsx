import { FC, ReactElement, useCallback } from "react";
import Tooltip from "../../../components/UI/Tooltip";
import { SignOutIcon } from "./styled";
import { useHistory } from "react-router-dom";
import { signOut as authSignOut } from "../../../server/authService";

const SignOut: FC = (): ReactElement => {
  const {
    replace,
    location: { pathname },
  } = useHistory();

  const signOut = useCallback(() => {
    authSignOut();
    replace(pathname);
  }, [pathname, replace]);

  return (
    <Tooltip title="sign out">
      <SignOutIcon onClick={signOut} />
    </Tooltip>
  );
};

export default SignOut;
