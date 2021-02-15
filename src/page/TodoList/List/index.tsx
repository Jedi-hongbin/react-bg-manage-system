import React, { FC, ReactElement, useCallback } from "react";
import { ID, Todo, TodoList } from "../typing";
import { List as MaterialList, Grid, Typography } from "@material-ui/core";
import ListItem from "./ListItem";

interface IProps {
  todoList: TodoList;
  onRemoveList: (id: ID) => () => void;
  onToggleListStatus: (id: ID) => () => void;
}

const List: FC<IProps> = ({
  todoList,
  onRemoveList,
  onToggleListStatus,
}): ReactElement => {
  const renderTodoItem = useCallback(
    (todo: Todo) => (
      <ListItem
        key={todo.id}
        todo={todo}
        onRemoveList={onRemoveList}
        onToggleListStatus={onToggleListStatus}
      />
    ),
    [onRemoveList, onToggleListStatus]
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
  return <Typography color="textPrimary">not data</Typography>;
};

export default List;
