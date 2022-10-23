import { Avatar, Typography } from 'antd';
import React from 'react';
import styled from 'styled-components';

const WrapperStyled = styled.div`
  margin-bottom: 10px;
  .author {
    margin-left: 5px;
    font-weight: 600;
  }

  .date {
    margin-left: 10px;
    color: #aaa;
    font-size: 12px;
  }

  .content {
    margin-left: 38px;
  }
`;

function Message({ text, displayName, createdAt, photoURL }) {
  return (
    <WrapperStyled>
      <div>
        <Avatar src={photoURL} size='small'>
          A
        </Avatar>
        <Typography.Text className='author'>{displayName}</Typography.Text>
        <Typography.Text className='date'>{createdAt}</Typography.Text>
      </div>
      <div>
        <Typography.Text className='content'>{text}</Typography.Text>
      </div>
    </WrapperStyled>
  );
}

export default Message;
