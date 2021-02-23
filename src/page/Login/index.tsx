import React, { useCallback, useState } from "react";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import {
  LoginButton,
  LoginContainer,
  MySpace,
  PasswordInput,
  RegisterButton,
  Title,
  Wrapper,
  Input,
} from "./styled";
import useUser, { USER } from "./useUser";
import { snackbar } from "../../components/UI/Snackbar";
import { login } from "../../server/authService";

interface Props {}

const Login: React.FC<Props> = (): React.ReactElement => {
  const { replace } = useHistory();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useUser();

  const iconRender = useCallback(
    (visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />),
    []
  );

  const handleHello = useCallback((name) => {
    snackbar.current?.show();
    snackbar.current?.message(`hello ${name}`);
    snackbar.current?.setAutoHideDuration(2000);
  }, []);

  const handleLogin = useCallback(() => {
    if (loading) return;
    setLoading(true);
    login(user);
    setTimeout(() => {
      setLoading(false);
      handleHello(user.name);
      replace("dashboard");
    }, 1000);
  }, [handleHello, loading, replace, user]);

  return (
    <Wrapper>
      <LoginContainer>
        <MySpace direction="vertical">
          <Title>Login</Title>
          <Input
            autoFocus
            name={USER.name}
            value={user.name}
            onChange={setUser}
          />
          <PasswordInput
            name={USER.password}
            value={user.password}
            onChange={setUser}
            iconRender={iconRender}
          />
          <LoginButton loading={loading} onClick={handleLogin} />
          <RegisterButton />
        </MySpace>
      </LoginContainer>
    </Wrapper>
  );
};

export default Login;
