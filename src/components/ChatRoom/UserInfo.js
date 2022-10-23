import { LogoutOutlined } from '@ant-design/icons';
import { Avatar, Button, Typography } from 'antd';
import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { auth, db } from '../../firebase/config';

import { AuthContext } from '../../Context/AuthProvider';

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
  // useEffect(() => {
  //   db.collection('users').onSnapshot((snapshot) => {
  //     const data = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  //   });
  // }, []);

  const data = useContext(AuthContext);
  const { displayName, photoURL } = data.user;

  return (
    <WrapperStyled>
      <div>
        <Avatar src={photoURL}>
          {photoURL ? '' : displayName?.charAt(0)?.toUpperCase()}
        </Avatar>
        <Typography.Text className='username'>{displayName}</Typography.Text>
      </div>
      <Button ghost icon={<LogoutOutlined />} onClick={() => auth.signOut()}>
        Đăng xuất
      </Button>
    </WrapperStyled>
  );
};

export default UserInfo;
