import React, { FC, ReactElement, useCallback, useRef } from "react";
import { TextField } from "../../components/UI/Input";
import { Button } from "../../components/UI/Button";
import { Grid } from "@material-ui/core";
import { v1 as UUIDV1 } from "uuid";
import { Todo } from "./typing";
interface IProps {
  onAddTodo: (todo: Todo) => void;
}

const Input: FC<IProps> = ({ onAddTodo }): ReactElement => {
  const input = useRef<HTMLInputElement>(null);

  const handleAddTodo = useCallback((): void => {
    const content = input!.current!.value;
    const todo = { id: UUIDV1(), content, complete: false };
    onAddTodo(todo);
    input!.current!.value = "";
  }, [onAddTodo]);

  return (
    <Grid container spacing={2}>
      <Grid container item xs={12} sm={3}>
        <TextField inputRef={input} label="TODO" flex={1} />
      </Grid>
      <Grid
        container
        item
        xs={12}
        sm={3}
        alignItems="flex-end"
        justify="flex-start"
      >
        <Button
          onClick={handleAddTodo}
          width="100px"
          variant="outlined"
          color="primary"
        >
          ADD
        </Button>
      </Grid>
    </Grid>
  );
};

export default Input;
