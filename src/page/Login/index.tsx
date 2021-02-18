import React, { useCallback, useRef, useState } from "react";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Input as AntdInput, notification } from "antd";
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
import { log } from "../../utils/logger";
import useUser, { User } from "./useUser";

interface Props {}

const Login: React.FC<Props> = (): React.ReactElement => {
  const { replace } = useHistory();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useUser();
  const username = useRef<AntdInput>(null);
  const password = useRef<AntdInput>(null);

  const iconRender = useCallback(
    (visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />),
    []
  );

  const handleLogin = useCallback(() => {
    if (loading) return;
    setLoading(true);
    const Username = username.current!.input.value;
    const Password = password.current!.input.value;
    log({
      Username,
      Password,
    });
    setTimeout(() => {
      setLoading(false);
      notification.success({
        message: `Hello ${Username}`,
        description: "Login success!",
        duration: 2,
      });
      replace("dashboard");
    }, 500);
  }, [loading, replace]);

  return (
    <Wrapper>
      <LoginContainer>
        <MySpace direction="vertical">
          <Title>Login</Title>
          {/* <Input ref={username} /> */}
          <Input value={user.name} onChange={setUser(User.name)} />
          {/* <PasswordInput ref={password} iconRender={iconRender} /> */}
          <PasswordInput
            value={user.password}
            onChange={setUser(User.password)}
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
