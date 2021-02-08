import React from "react";
import logo from "../../../assets/image/logo.jpeg";
import styled from "styled-components";
import { flexCenter } from "../../../constants/styled";

const LogoImg = styled.img.attrs({ src: logo, alt: "logo" })`
  width: 2rem;
  height: 2rem;
`;

const LogoContainer = styled.div`
  ${flexCenter};
  background-color: #242121;
  height: 4rem;
  overflow: hidden;
`;

const Logo: React.FC = (): React.ReactElement => {
  return (
    <LogoContainer>
      <LogoImg />
    </LogoContainer>
  );
};

export default Logo;
