import { UserAddOutlined } from '@ant-design/icons';
import { Avatar, Button, Form, Input, Tooltip } from 'antd';
import React from 'react';
import styled from 'styled-components';
import Message from './Message';

const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  height: 56px;
  border-bottom: 1px solid rgba(230, 230, 230);

  .header {
    &__info {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    &__title {
      margin-bottom: 0;
      font-weight: 600;
    }

    &__description {
      font-size: 0.9rem;
    }
  }
`;

const ButtonGroupStyled = styled.div`
  display: flex;
  align-items: center;
`;

const WrapperStyled = styled.div`
  height: 100vh;
`;

const ContentStyled = styled.div`
  height: calc(100% - 56px);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 12px;
`;

const MessageListStyled = styled.div`
  max-height: 100%;
  overflow-y: auto;
`;

const FormStyled = styled(Form)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid rgba(230, 230, 230);
  border-radius: 2px;
  margin-top: 10px;

  .ant-form-item {
    margin-bottom: 0;
    flex: 1;
  }
`;

const ChatWindow = () => {
  return (
    <WrapperStyled>
      <HeaderStyled>
        <div className='header__info'>
          <p className='header__title'>Room 1</p>
          <span className='header__description'>Mo ta room 1</span>
        </div>
        <ButtonGroupStyled>
          <Button type='text' icon={<UserAddOutlined />}>
            Moi
          </Button>
          <Avatar.Group size='small' maxCount={2}>
            <Tooltip title='A'>
              <Avatar></Avatar>
            </Tooltip>
            <Tooltip title='B'>
              <Avatar></Avatar>
            </Tooltip>
            <Tooltip title='C'>
              <Avatar></Avatar>
            </Tooltip>
            <Tooltip title='D'>
              <Avatar></Avatar>
            </Tooltip>
          </Avatar.Group>
        </ButtonGroupStyled>
      </HeaderStyled>
      <ContentStyled>
        <MessageListStyled>
          <Message
            photoURL={null}
            displayName='A'
            text='A gui'
            createdAt='321321321'
          />

          <Message
            photoURL={null}
            displayName='A'
            text='A gui'
            createdAt='321321321'
          />

          <Message
            photoURL={null}
            displayName='A'
            text='A gui'
            createdAt='321321321'
          />

          <Message
            photoURL={null}
            displayName='A'
            text='A gui'
            createdAt='321321321'
          />

          <Message
            photoURL={null}
            displayName='A'
            text='A gui'
            createdAt='321321321'
          />

          <Message
            photoURL={null}
            displayName='A'
            text='A gui'
            createdAt='321321321'
          />

          <Message
            photoURL={null}
            displayName='A'
            text='A gui'
            createdAt='321321321'
          />

          <Message
            photoURL={null}
            displayName='A'
            text='A gui'
            createdAt='321321321'
          />

          <Message
            photoURL={null}
            displayName='A'
            text='A gui'
            createdAt='321321321'
          />

          <Message
            photoURL={null}
            displayName='A'
            text='A gui'
            createdAt='321321321'
          />

          <Message
            photoURL={null}
            displayName='A'
            text='A gui'
            createdAt='321321321'
          />

          <Message
            photoURL={null}
            displayName='A'
            text='A gui'
            createdAt='321321321'
          />

          <Message
            photoURL={null}
            displayName='A'
            text='A gui'
            createdAt='321321321'
          />

          <Message
            photoURL={null}
            displayName='A'
            text='A gui'
            createdAt='321321321'
          />

          <Message
            photoURL={null}
            displayName='A'
            text='A gui'
            createdAt='321321321'
          />

          <Message
            photoURL={null}
            displayName='A'
            text='A gui'
            createdAt='321321321'
          />

          <Message
            photoURL={null}
            displayName='A'
            text='A gui'
            createdAt='321321321'
          />

          <Message
            photoURL={null}
            displayName='A'
            text='A gui'
            createdAt='321321321'
          />

          <Message
            photoURL={null}
            displayName='A'
            text='A gui'
            createdAt='321321321'
          />

          <Message
            photoURL={null}
            displayName='A'
            text='A gui'
            createdAt='321321321'
          />

          <Message
            photoURL={null}
            displayName='A'
            text='A gui'
            createdAt='321321321'
          />
        </MessageListStyled>
        <FormStyled>
          <Form.Item>
            <Input
              bordered={false}
              autoComplete='off'
              placeholder='nhap tin nhan'
            />
          </Form.Item>
          <Button type='primary'>Gui</Button>
        </FormStyled>
      </ContentStyled>
    </WrapperStyled>
  );
};

export default ChatWindow;
