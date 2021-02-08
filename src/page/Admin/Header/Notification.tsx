import React, { Fragment, useCallback, useMemo, useState } from "react";
import { Badge } from "antd";
import Tooltip from "../../../components/UI/Tooltip";
import styled from "styled-components";
import { BellIcon } from "./styled";
import { Close as CloseIcon } from "@material-ui/icons";
import {
  Div,
  themeBackground,
  themeBackground_second,
  themeFontColor,
} from "../../../constants/styled";
import {
  List,
  ListItem,
  ListItemText,
  Popover,
  Divider,
} from "@material-ui/core";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { Button } from "../../../components/UI/Button";

const StyledPopover = styled(Popover)`
  .MuiPopover-paper {
    /* ${themeBackground}; */
  }
`;
/* ${(props) =>
    props.theme.mode === Mode.LIGHT ? shadow : "border: 1px solid #ccc"}; */

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

      <StyledPopover
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
      </StyledPopover>
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

const StyledList = styled(List)`
  ${themeBackground_second}
`;
const StyledMyListItemText = styled(MyListItemText)`
  ${themeFontColor};
`;
const StyledCloseIcon = styled(CloseIcon)`
  ${themeFontColor};
`;

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
          <StyledMyListItemText primary={item} />
          <StyledCloseIcon onClick={deleteNotification(index)} />
        </ListItem>
        <Divider />
      </Fragment>
    ),
    [deleteNotification]
  );

  return data.length ? (
    <Fragment>
      <StyledList
        className={classes.root}
        aria-label="secondary mailbox folders"
      >
        {data.map(renderListItem)}
      </StyledList>
      <Button width="100%" color="secondary" onClick={clearNotification}>
        clear notifications
      </Button>
    </Fragment>
  ) : (
    <NotData />
  );
};

const NotData = () => (
  <Div
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
  </Div>
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
