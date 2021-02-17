import React, { FC, ReactElement } from "react";
import { ContentContainer } from "../../../constants/LayoutStyled";
import Emerald from "./Emerald";
import Emerald2 from "./Emerald2";

interface IProps {}

const ImageVideo: FC<IProps> = (): ReactElement => {
  return (
    <ContentContainer>
      <Emerald />
      <Emerald2 />
    </ContentContainer>
  );
};
export default ImageVideo;
