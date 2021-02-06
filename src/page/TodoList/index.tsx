import React, { FC, ReactElement } from "react";
import { ContentContainer } from "../../constants/LayoutStyled";
import Input from "./Input";

interface IProps {}

const TodoList: FC<IProps> = (): ReactElement => {
  return (
    <ContentContainer>
      <h1>ToDo List</h1>
      <Input />
    </ContentContainer>
  );
};
export default TodoList;
