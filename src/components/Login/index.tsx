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

interface Props {}

const Login: React.FC<Props> = () => {
  const { replace } = useHistory();
  const [loading, setLoading] = useState(false);
  const username = useRef<AntdInput>(null);
  const password = useRef<AntdInput>(null);

  const iconRender = useCallback(
    (visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />),
    []
  );

  const handleLogin = useCallback(() => {
    if (loading) return;
    setLoading(true);
    const Username = username?.current?.input?.value;
    const Password = password?.current?.input?.value;
    console.log({
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
    }, 2000);
  }, [loading, replace]);

  console.log("render");
  return (
    <Wrapper>
      <LoginContainer>
        <MySpace direction="vertical">
          <Title>Login</Title>
          <Input ref={username} />
          <PasswordInput ref={password} iconRender={iconRender} />
          <LoginButton loading={loading} onClick={handleLogin} />
          <RegisterButton />
        </MySpace>
      </LoginContainer>
    </Wrapper>
  );
};
export default Login;
