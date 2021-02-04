import styled, { keyframes, css } from "styled-components";
import bgImage from "@/assets/image/33823326832_059359647d_k.jpg";
import { Button, Input as AntdInput, Space } from "antd";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${bgImage}) no-repeat center center;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

const DebutAnimation = keyframes`
0% {
  transform: translateX(100%);
  filter: blur(10px);
}

100% {
  filter: blur(0px);
  transform: translateX(0);
}
`;

const Animated = css`
  animation: ${DebutAnimation} 0.4s linear;
`;

export const LoginContainer = styled.div`
  margin-left: auto;
  width: 350px;
  background-color: rgba(255, 255, 255, 0.6);
  height: 100%;
  padding: 1rem;
  ${Animated};
`;

export const MySpace = styled(Space)`
  height: 100%;
  width: 100%;
`;

export const Title = styled.span`
  font-size: 2rem;
  font-weight: bold;
  color: #fff;
`;

export const Input = styled(AntdInput).attrs({ placeholder: " username" })`
  height: 40px;
`;

export const PasswordInput = styled(AntdInput.Password).attrs({
  placeholder: " password",
})`
  height: 40px;
`;

export const LoginButton = styled(Button).attrs({
  type: "primary",
  children: "Login",
})`
  width: 100%;
  font-weight: bold;
`;

export const RegisterButton = styled(Button).attrs({
  type: "link",
  children: "Register",
})`
  font-weight: bold;
  display: inline-block;
  margin-left: 240px;
`;
