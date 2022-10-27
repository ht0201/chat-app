import { Col, Row } from 'antd';
import React from 'react';
import styled from 'styled-components';
import RoomList from './RoomList';
import UserInfo from './UserInfo';

const SidebarStyled = styled.div`
  background: #3b1068;
  height: 100vh;
`;

const Sidebar = () => {
  return (
    <SidebarStyled>
      <Row>
        <Col span={24}>
          <UserInfo />
        </Col>
        <Col span={24}>
          <RoomList />
        </Col>
      </Row>
    </SidebarStyled>
  );
};

export default Sidebar;
