import { LogoutOutlined } from '@ant-design/icons';
import { Avatar, Button, Typography } from 'antd';
import React from 'react';
import styled from 'styled-components';

const WrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid rgba(82, 38, 83);

  .username {
    color: white;
    padding-left: 5px;
  }
`;

const UserInfo = () => {
  return (
    <WrapperStyled>
      <div>
        <Avatar src={null} />
        <Typography.Text className='username'>Name</Typography.Text>
      </div>
      <Button ghost icon={<LogoutOutlined />}>
        Đăng xuất
      </Button>
    </WrapperStyled>
  );
};

export default UserInfo;
