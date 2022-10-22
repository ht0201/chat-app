import { PlusSquareOutlined } from '@ant-design/icons';
import { Button, Collapse, Typography } from 'antd';
import React from 'react';
import styled from 'styled-components';

const { Panel } = Collapse;

const PanelStyled = styled(Panel)`
  &&& {
    .ant-collapse-header,
    p {
      color: white;
    }

    .ant-collapse-content {
      padding: 0 25px;
    }

    .add-room {
      color: white;
      border: none;
      padding-left: 0;
    }
  }
`;

const LinkStyled = styled(Typography.Link)`
  display: block;
  margin-bottom: 5px;
  color: white;
`;

const RoomList = () => {
  return (
    <Collapse ghost defaultActiveKey={['1']}>
      <PanelStyled header='Danh sach cac phong' key='1'>
        <LinkStyled>Room 1</LinkStyled>
        <LinkStyled>Room 2</LinkStyled>
        <LinkStyled>Room 3</LinkStyled>
        <Button type='text' className='add-room' icon={<PlusSquareOutlined />}>
          Them phong
        </Button>
      </PanelStyled>
    </Collapse>
  );
};

export default RoomList;
