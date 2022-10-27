import { PlusSquareOutlined } from '@ant-design/icons';
import { Button, Collapse, Typography } from 'antd';
import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../Context/AppProvider';

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
  const { rooms, setIsAddRoomVisible, setSelectedRoomId } =
    useContext(AppContext);

  const handleAddRoom = () => {
    setIsAddRoomVisible(true);
  };

  return (
    <Collapse ghost defaultActiveKey={['1']}>
      <PanelStyled header='Danh sach cac phong' key='1'>
        {rooms?.map((room) => (
          <LinkStyled key={room.id} onClick={() => setSelectedRoomId(room.id)}>
            {room.name}
          </LinkStyled>
        ))}

        <Button
          type='text'
          className='add-room'
          icon={<PlusSquareOutlined />}
          onClick={handleAddRoom}
        >
          Them phong
        </Button>
      </PanelStyled>
    </Collapse>
  );
};

export default RoomList;
