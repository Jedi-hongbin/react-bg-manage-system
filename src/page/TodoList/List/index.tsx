import React, { FC, ReactElement, useCallback, Dispatch } from "react";
import { ID, Todo, TodoList } from "../typing";
import { List as MaterialList, Grid, Typography } from "@material-ui/core";
import {
  IRemoveTodoAction,
  IToggleTodoStatusAction,
  removeTodo,
  toggleTodoStatus,
} from "../action";
import ListItem from "./ListItem";

interface IProps {
  todoList: TodoList;
  dispatch: Dispatch<IRemoveTodoAction | IToggleTodoStatusAction>;
}

const List: FC<IProps> = ({ todoList, dispatch }): ReactElement => {
  const handleToggleTodoStatus = useCallback(
    (Id: ID) => () => toggleTodoStatus(Id)(dispatch),
    [dispatch]
  );

  const handleRemoveTodo = useCallback(
    (Id: ID) => () => removeTodo(Id)(dispatch),
    [dispatch]
  );

  const renderTodoItem = useCallback(
    (todo: Todo) => (
      <ListItem
        key={todo.id}
        todo={todo}
        handleToggleTodoStatus={handleToggleTodoStatus}
        handleRemoveTodo={handleRemoveTodo}
      />
    ),
    [handleToggleTodoStatus, handleRemoveTodo]
  );
  if (todoList.length) {
    return (
      <Grid>
        <Grid item sm={6}>
          <MaterialList>{todoList.map(renderTodoItem)}</MaterialList>
        </Grid>
      </Grid>
    );
  }
  return <Typography color="textPrimary">not date</Typography>;
};

export default List;
