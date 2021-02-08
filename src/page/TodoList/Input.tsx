import React, { FC, ReactElement } from "react";
import { TextField } from "../../components/UI/Input";
import { Button } from "../../components/UI/Button";
import { Grid } from "@material-ui/core";

interface IProps {}

const Input: FC<IProps> = (): ReactElement => {
  return (
    <Grid container spacing={2}>
      <Grid container item xs={12} sm={3}>
        <TextField label="TODO" flex={1} />
      </Grid>
      <Grid
        container
        item
        xs={12}
        sm={3}
        alignItems="flex-end"
        justify="flex-start"
      >
        <Button width="100px" variant="outlined" color="primary">
          ADD
        </Button>
      </Grid>
    </Grid>
  );
};
export default Input;
