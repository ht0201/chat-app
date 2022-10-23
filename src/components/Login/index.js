import { Button, Col, Row, Typography } from 'antd';
import React from 'react';
import firebase, { auth } from '../../firebase/config';
import { addDocument } from '../../firebase/services';

const { Title } = Typography;
const fbProvider = new firebase.auth.FacebookAuthProvider();

const Login = () => {
  const loginHandler = async () => {
    const { additionalUserInfo, user } = await auth.signInWithPopup(fbProvider);
    if (additionalUserInfo?.isNewUser) {
      addDocument('users', {
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        uid: user.displayName,
        providerId: additionalUserInfo.providerId,
      });
    }
  };

  return (
    <Row justify='center' style={{ height: 800 }}>
      <Col span={8}>
        <Title style={{ textAlign: 'center' }} level={3}>
          Chat App
        </Title>
        <Button style={{ width: '100%', marginBottom: 5 }}>
          Đăng nhập bằng Google
        </Button>
        <Button style={{ width: '100%' }} onClick={loginHandler}>
          Đăng nhập bằng Facebook
        </Button>
      </Col>
    </Row>
  );
};

export default Login;
