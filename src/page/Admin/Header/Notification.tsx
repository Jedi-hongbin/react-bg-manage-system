import React, { Fragment, useCallback, useMemo, useState } from "react";
import { Badge } from "antd";
import Tooltip from "../../../components/UI/Tooltip";
import styled from "styled-components";
import { BellIcon } from "./styled";
import { Close as CloseIcon } from "@material-ui/icons";
import { Button } from "../../../constants/styled";
import {
  List,
  ListItem,
  ListItemText,
  Popover,
  Divider,
} from "@material-ui/core";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";

const Notification = () => {
  const data = [
    "Racing car sprays burning fuel into crowd.",
    "Japanese princess to wed commoner.",
    "Australian walks 100km after outback crash.",
    "Man charged over missing wedding girl.",
    "Los Angeles battles huge wildfires.",
  ];
  const [notificationList, setNotificationList] = useState([...data]);
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const clearNotification = useCallback(
    () => setNotificationList(() => []),
    []
  );

  const deleteNotification = useCallback(
    (index) => () => {
      setNotificationList((prev: any) => {
        const data = [...prev];
        data.splice(index, 1);
        return data;
      });
    },
    []
  );
  // React.MouseEvent<HTMLButtonElement>
  const handleClick = (event: any) => {
    setAnchorEl(event.target);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = useMemo(() => Boolean(anchorEl), [anchorEl]);
  const id = useMemo(() => (open ? "simple-popover" : undefined), [open]);

  return (
    <Fragment>
      <Badge count={notificationList.length} size="small">
        <Tooltip title="notification">
          <BellIcon onClick={handleClick} />
        </Tooltip>
      </Badge>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "center",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "right",
        }}
      >
        <NotificationList
          data={notificationList}
          clearNotification={clearNotification}
          deleteNotification={deleteNotification}
        />
      </Popover>
    </Fragment>
  );
  // return (
  //   <Popover
  //     placement="bottomRight"
  //     title={<span>Notification</span>}
  //     content={
  //       <NotificationList
  //         data={notificationList}
  //         clearNotification={clearNotification}
  //         deleteNotification={deleteNotification}
  //       />
  //     }
  //     trigger="click"
  //   >
  //     <Badge count={notificationList.length} size="small">
  //       <Tooltip title="notification">
  //         <BellIcon />
  //       </Tooltip>
  //     </Badge>
  //   </Popover>
  // );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      maxWidth: 350,
      maxHeight: 200,
      backgroundColor: theme.palette.background.paper,
      overflowY: "scroll",
    },
  })
);

const MyListItemText = styled(ListItemText)`
  span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

interface NotificationListProps {
  data: Array<any>;
  clearNotification: () => void;
  deleteNotification: (index: number) => () => void;
}

const NotificationList: React.FC<NotificationListProps> = ({
  data,
  clearNotification,
  deleteNotification,
}) => {
  const classes = useStyles();

  const renderListItem = useCallback(
    (item, index) => (
      <Fragment key={index}>
        <ListItem button>
          <MyListItemText primary={item} />
          <CloseIcon onClick={deleteNotification(index)} />
        </ListItem>
        <Divider />
      </Fragment>
    ),
    [deleteNotification]
  );

  return (
    <Fragment>
      {data.length ? (
        <Fragment>
          <List className={classes.root} aria-label="secondary mailbox folders">
            {data.map(renderListItem)}
          </List>
          <Button color="primary" width="100%" onClick={clearNotification}>
            clear notifications
          </Button>
        </Fragment>
      ) : (
        <NotData />
      )}
    </Fragment>
  );
};

const NotData = () => (
  <div
    style={{
      width: 150,
      height: 200,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: "bold",
    }}
  >
    Not Data
  </div>
);

/* <List
  bordered
  dataSource={data}
  renderItem={(item, index) => (
    <List.Item
      extra={<CloseOutlined onClick={deleteNotification(index)} />}
    >
      {item}
    </List.Item>
  )}
/> */

export default Notification;
