import React, { useCallback, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import bgImage from "../../assets/image/33823326832_059359647d_k.jpg";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button, Input as AntdInput, message, Space } from "antd";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${bgImage}) no-repeat center center;
`;

const DebutAnimation = keyframes`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const LoginContainer = styled.div`
  margin-left: auto;
  width: 350px;
  background-color: rgba(255, 255, 255, 0.4);
  height: 100%;
  padding: 1rem;
  animation: ${DebutAnimation} 0.6s ease-out;
`;

const MySpace = styled(Space)`
  height: 100%;
  width: 100%;
`;

const Title = styled.span`
  font-size: 2rem;
  font-weight: bold;
  color: #fff;
`;

const Input = styled(AntdInput).attrs({ placeholder: " username" })`
  height: 40px;
`;

const PasswordInput = styled(AntdInput.Password).attrs({
  placeholder: " password",
})`
  height: 40px;
`;

const LoginButton = styled(Button).attrs({
  type: "primary",
  children: "Login",
})`
  width: 100%;
  font-weight: bold;
`;

const RegisterButton = styled(Button).attrs({
  type: "link",
  children: "Register",
})`
  font-weight: bold;
  display: inline-block;
  margin-left: 240px;
`;

interface Props {}

const Login: React.FC<Props> = () => {
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
      message
        .success({
          content: `${Username} login success!`,
          duration: 1,
        })
        .then((r) => null);
    }, 2000);
  }, [loading]);

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
