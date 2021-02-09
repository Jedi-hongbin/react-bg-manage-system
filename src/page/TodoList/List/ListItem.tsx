import {
  Checkbox,
  ListItemIcon,
  ListItemText,
  ListItem as MaterialListItem,
} from "@material-ui/core";
import { IndeterminateCheckBox } from "@material-ui/icons";
import React, { FC, ReactElement } from "react";
import { Todo, ID } from "../typing";

interface ITodoListItem {
  todo: Todo;
  onRemoveList: (id: ID) => () => void;
  onToggleListStatus: (id: ID) => () => void;
}

const ListItem: FC<ITodoListItem> = ({
  todo: { id, content, complete },
  onRemoveList,
  onToggleListStatus,
}: ITodoListItem): ReactElement => (
  <MaterialListItem divider button>
    <ListItemIcon>
      <Checkbox
        checked={complete}
        color="primary"
        onChange={onToggleListStatus(id)}
      />
    </ListItemIcon>
    <ListItemText primary={content} />
    <ListItemIcon>
      <IndeterminateCheckBox onClick={onRemoveList(id)} />
    </ListItemIcon>
  </MaterialListItem>
);

export default ListItem;
