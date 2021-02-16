import React, { FC, ReactElement } from "react";
import DragImages from "./DragImages";
import { ContentContainer } from "../../../constants/LayoutStyled";

interface IProps {}

const ImageVideo: FC<IProps> = (): ReactElement => {
  return (
    <ContentContainer>
      <DragImages />
      <DragImages width={300} height={300} />
      <DragImages width={200} height={200} />
    </ContentContainer>
  );
};
export default ImageVideo;
