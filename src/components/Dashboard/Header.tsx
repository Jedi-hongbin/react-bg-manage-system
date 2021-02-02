import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  BellOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import React, { useCallback, useMemo, useState } from "react";
import { StyledHeader } from "./styled";
import styled, { css } from "styled-components";
import { Badge, Popover, List } from "antd";
import { Button } from "../../constants/styled";

interface Props {
  collapsed: boolean;
  toggleCollapsed: () => void;
}

const Header: React.FC<Props> = ({ collapsed, toggleCollapsed }) => {
  const MenuIcon = useMemo(
    () =>
      collapsed ? (
        <UnfoldIcon onClick={toggleCollapsed} />
      ) : (
        <FoldOutIcon onClick={toggleCollapsed} />
      ),
    [collapsed, toggleCollapsed]
  );

  return (
    <StyledHeader>
      {MenuIcon}
      <UserInfo>
        <Notification />
      </UserInfo>
    </StyledHeader>
  );
};

export default Header;

const Notification = () => {
  const data = [
    "Racing car sprays burning fuel into crowd.",
    "Japanese princess to wed commoner.",
    "Australian walks 100km after outback crash.",
    "Man charged over missing wedding girl.",
    "Los Angeles battles huge wildfires.",
  ];
  const [notificationList, setNotificationList] = useState([...data]);

  const clearNotification = useCallback(
    () => setNotificationList(() => []),
    []
  );

  const deleteNotification = useCallback(
    (index) => () => {
      setNotificationList((prev) => {
        const data = [...prev];
        data.splice(index, 1);
        return data;
      });
    },
    []
  );

  return (
    <Popover
      placement="bottomRight"
      title={<span>Notification</span>}
      content={
        <NotificationList
          data={notificationList}
          clearNotification={clearNotification}
          deleteNotification={deleteNotification}
        />
      }
      trigger="click"
    >
      <Badge count={notificationList.length} size="small">
        <BellIcon />
      </Badge>
    </Popover>
  );
};

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
  return (
    <React.Fragment>
      <List
        bordered
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item
            extra={<CloseOutlined onClick={deleteNotification(index)} />}
          >
            {item}
          </List.Item>
        )}
      />
      <Button onClick={clearNotification} type="link">
        clear notifications
      </Button>
    </React.Fragment>
  );
};

const UserInfo = styled.div``;

const icon = css`
  color: #999;
  font-size: 1.2rem;
  transition: 0.2s all linear;

  &:hover {
    color: #fff;
  }
`;

const BellIcon = styled(BellOutlined)`
  ${icon}
`;
const UnfoldIcon = styled(MenuUnfoldOutlined)`
  ${icon}
`;
const FoldOutIcon = styled(MenuFoldOutlined)`
  ${icon}
`;
