import React, { FC, ReactElement } from "react";
import { ContentContainer } from "../../constants/LayoutStyled";

interface IProps {}

const TodoList: FC<IProps> = (): ReactElement => {
  return <ContentContainer>TODO LIST</ContentContainer>;
};
export default TodoList;
