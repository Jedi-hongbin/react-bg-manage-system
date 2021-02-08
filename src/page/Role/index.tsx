import React, { FC, ReactElement } from "react";
import { ContentContainer } from "../../constants/LayoutStyled";

interface IProps {}

const Role: FC<IProps> = (): ReactElement => {
  return (
    <ContentContainer
      style={{
        backgroundColor: "#faf",
      }}
    >
      Role
    </ContentContainer>
  );
};
export default Role;
