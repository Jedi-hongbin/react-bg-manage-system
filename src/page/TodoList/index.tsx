import React, {
  FC,
  ReactElement,
  useReducer,
  useEffect,
  useCallback,
} from "react";
import { ContentContainer } from "../../constants/LayoutStyled";
import { Typography } from "@material-ui/core";
import Input from "./Input";
import List from "./List";
import { reducer } from "./reducer";

const initializer = () => JSON.parse(localStorage.getItem("todoList") || "[]");

const TodoList: FC = (): ReactElement => {
  const [todoList, dispatch] = useReducer(reducer, undefined, initializer);

  const saveLocalStorage = useCallback(
    (todoList) => () => {
      localStorage.setItem("todoList", JSON.stringify(todoList));
    },
    []
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(saveLocalStorage(todoList), [todoList]);

  return (
    <ContentContainer>
      <Typography variant="caption">ToDo List</Typography>
      <Input dispatch={dispatch} />
      <List todoList={todoList} dispatch={dispatch} />
    </ContentContainer>
  );
};
export default TodoList;
