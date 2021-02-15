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
import { addTodo, removeTodo, toggleTodoListStatus } from "./action";
import { ID, Todo } from "./typing";

const initializer = () => JSON.parse(localStorage.getItem("todoList") || "[]");

const TodoList: FC = (): ReactElement => {
  const [todoList, dispatch] = useReducer(reducer, undefined, initializer);

  const saveLocalStorage = useCallback(
    (todoList) => () => {
      localStorage.setItem("todoList", JSON.stringify(todoList));
    },
    []
  );

  const handleAddTodo = useCallback((todo: Todo) => {
    addTodo(todo)(dispatch);
  }, []);

  const handleRemoveList = useCallback(
    (id: ID) => () => {
      removeTodo(id)(dispatch);
    },
    []
  );

  const handleToggleListStatus = useCallback(
    (id: ID) => () => {
      toggleTodoListStatus(id)(dispatch);
    },
    []
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(saveLocalStorage(todoList), [todoList]);

  return (
    <ContentContainer>
      <Typography variant="caption">ToDo List</Typography>
      <Input onAddTodo={handleAddTodo} />
      <List
        todoList={todoList}
        onRemoveList={handleRemoveList}
        onToggleListStatus={handleToggleListStatus}
      />
    </ContentContainer>
  );
};
export default TodoList;
