import React, { ReactElement, FC } from "react";
import { ContentContainer } from "../../constants/LayoutStyled";
interface IProps {}

const Dashboard: FC<IProps> = (): ReactElement => {
  return (
    <ContentContainer
      style={{
        backgroundColor: "#faa",
      }}
    >
      Dashboard
    </ContentContainer>
  );
};
export default Dashboard;
