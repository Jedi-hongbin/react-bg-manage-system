import React, { FC, ReactElement, useCallback } from "react";
import { Todo, TodoList } from "./typing";
import {
  List as MaterialList,
  ListItem,
  ListItemText,
  ListItemIcon,
  Grid,
  Checkbox,
} from "@material-ui/core";
import { IndeterminateCheckBox } from "@material-ui/icons";

interface IProps {
  todoList: TodoList;
  removeTodo: (todo: Todo) => void;
  toggleTodoStatus: (todo: Todo) => void;
}

const List: FC<IProps> = ({
  todoList,
  removeTodo,
  toggleTodoStatus,
}): ReactElement => {
  const handleToggleTodoStatus = useCallback(
    (todo: Todo) => () => toggleTodoStatus(todo),
    [toggleTodoStatus]
  );

  const handleRemoveTodo = useCallback((todo: Todo) => () => removeTodo(todo), [
    removeTodo,
  ]);

  const renderTodoItem = useCallback(
    (todo: Todo) => {
      const { content, selected } = todo;
      return (
        <ListItem key={content} divider button>
          <ListItemIcon>
            <Checkbox
              checked={selected}
              color="primary"
              onChange={handleToggleTodoStatus(todo)}
            />
          </ListItemIcon>
          <ListItemText primary={content} />
          <ListItemIcon>
            <IndeterminateCheckBox onClick={handleRemoveTodo(todo)} />
          </ListItemIcon>
        </ListItem>
      );
    },
    [handleToggleTodoStatus, handleRemoveTodo]
  );

  return (
    <Grid>
      <Grid item sm={6}>
        <MaterialList>{todoList.map(renderTodoItem)}</MaterialList>
      </Grid>
    </Grid>
  );
};
export default List;
