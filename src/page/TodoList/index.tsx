import React, { FC, ReactElement } from "react";
import { ContentContainer } from "../../constants/LayoutStyled";
import Input from "./Input";
import { Typography } from "@material-ui/core";

interface IProps {}

const TodoList: FC<IProps> = (): ReactElement => {
  return (
    <ContentContainer>
      <Typography variant="caption">ToDo List</Typography>
      <Input />
    </ContentContainer>
  );
};
export default TodoList;
