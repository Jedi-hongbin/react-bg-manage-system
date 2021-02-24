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
import { snackbarMessage } from "../../components/UI/Snackbar";
import { logIn } from "../../server/authService";

const Login: React.FC = (): React.ReactElement => {
  const { replace } = useHistory();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useUser();

  const iconRender = useCallback(
    (visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />),
    []
  );

  const handleHello = useCallback((name) => {
    snackbarMessage(`hello ${name}`);
  }, []);

  const handleLogin = useCallback(() => {
    if (loading) return;
    setLoading(true);
    logIn(user);
    setLoading(false);
    handleHello(user.name);
    replace("/");
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
