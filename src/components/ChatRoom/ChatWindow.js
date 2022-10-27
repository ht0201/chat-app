import { UserAddOutlined } from '@ant-design/icons';
import { Alert, Avatar, Button, Form, Input, Tooltip } from 'antd';
import React, { useContext, useMemo } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../Context/AppProvider';
import { AuthContext } from '../../Context/AuthProvider';
import { addDocument } from '../../firebase/services';
import UseFirestore from '../../hooks/useFirestore';
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
      color: #999;
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
  const { selectedRoom, members, setInviteMemberVisible } =
    useContext(AppContext);
  const {
    user: { displayName, uid, photoURL },
  } = useContext(AuthContext);

  const [form] = Form.useForm();
  const [inputValue, setInputValue] = useState('');

  const inviteMemberHandle = () => {
    setInviteMemberVisible(true);
  };

  const inputChangeHandle = (e) => {
    setInputValue(e.target.value);
  };

  const inputSubmitHandle = () => {
    addDocument('messages', {
      uid,
      displayName,
      photoURL,
      text: inputValue,
      roomId: selectedRoom.id,
      // createdAt: ,
    });

    form.resetFields(['message']);
  };

  // get messages
  const messagesCondition = useMemo(() => {
    if (selectedRoom?.id) {
      return {
        fieldName: 'roomId',
        operator: '==',
        compareValue: selectedRoom.id,
      };
    }
  }, [selectedRoom?.id]);
  const messages = UseFirestore('messages', messagesCondition);

  return (
    <WrapperStyled>
      {selectedRoom?.id ? (
        <>
          <HeaderStyled>
            <div className='header__info'>
              <p className='header__title'>{selectedRoom?.name}</p>
              <span className='header__description'>
                {selectedRoom?.description}
              </span>
            </div>
            <ButtonGroupStyled>
              <Button
                type='text'
                icon={<UserAddOutlined />}
                onClick={inviteMemberHandle}
              >
                Mời
              </Button>
              <Avatar.Group size='small' maxCount={2}>
                {members.map((member) => (
                  <Tooltip title={member.displayName} key={member.id}>
                    <Avatar src={member.photoURL}>
                      {member.photoURL
                        ? ''
                        : member.displayName.charAt(0)?.toUpperCase()}
                    </Avatar>
                  </Tooltip>
                ))}
              </Avatar.Group>
            </ButtonGroupStyled>
          </HeaderStyled>
          <ContentStyled>
            <MessageListStyled>
              {messages.map(
                ({ photoURL, displayName, text, createdAt, id }) => (
                  <Message
                    key={id}
                    photoURL={photoURL}
                    displayName={displayName}
                    text={text}
                    createdAt={createdAt}
                  />
                )
              )}
            </MessageListStyled>
            <FormStyled form={form}>
              <Form.Item name='message'>
                <Input
                  bordered={false}
                  autoComplete='off'
                  placeholder='Nhập tin nhắn'
                  onChange={inputChangeHandle}
                  onPressEnter={inputSubmitHandle}
                  value={inputValue}
                />
              </Form.Item>
              <Button type='primary' onClick={inputSubmitHandle}>
                Gửi
              </Button>
            </FormStyled>
          </ContentStyled>
        </>
      ) : (
        <Alert type='info' message='Hay chon phong' closable />
      )}
    </WrapperStyled>
  );
};

export default ChatWindow;
