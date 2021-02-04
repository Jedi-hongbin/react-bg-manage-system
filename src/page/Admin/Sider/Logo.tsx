import React, { useMemo } from "react";
import logo from "../../../assets/image/logo.jpeg";
import logo_big from "../../../assets/image/logo_big.jpg";
import styled from "styled-components";
import { flexCenter } from "../../../constants/styled";

const LogoImg = styled.img.attrs({ src: logo, alt: "logo" })`
  width: 2rem;
  height: 2rem;
`;

const LogoImgBig = styled.img.attrs({ src: logo_big, alt: "logo_big" })`
  width: 100%;
  height: 100%;
`;

const LogoContainer = styled.div`
  ${flexCenter};
  background-color: #242121;
  height: 4rem;
  overflow: hidden;
`;

interface Props {
  collapsed: boolean;
}

const Logo: React.FC<Props> = ({ collapsed }) => {
  const ShowLogo = useMemo(() => (collapsed ? <LogoImg /> : <LogoImgBig />), [
    collapsed,
  ]);
  return <LogoContainer>{ShowLogo}</LogoContainer>;
};
export default Logo;
