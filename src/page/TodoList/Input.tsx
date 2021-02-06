import React, { FC, ReactElement } from "react";
import { TextField } from "../../components/UI/Input";
import { Button } from "../../components/UI/Button";
import { Grid } from "@material-ui/core";

interface IProps {}

const Input: FC<IProps> = (): ReactElement => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={3}>
        <TextField
          light_bgc="rgb(0 0 0 / 20%)"
          dark_bgc="rgb(255,255,255,0.3)"
          label="TODO"
        />
      </Grid>
      <Grid
        container
        item
        xs={12}
        sm={2}
        alignItems="flex-end"
        justify="flex-end"
      >
        <Button width="100px">ADD</Button>
      </Grid>
    </Grid>
  );
};
export default Input;
