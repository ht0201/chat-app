import React from 'react';
import { Row, Col, Button, Typography } from 'antd';
import firebase, { auth } from '../../firebase/config';
import { useHistory } from 'react-router-dom';

const { Title } = Typography;
const fbProvider = new firebase.auth.FacebookAuthProvider();

const Login = () => {
  const history = useHistory();

  const loginHandler = () => {
    auth.signInWithPopup(fbProvider);
  };

  auth.onAuthStateChanged((user) => {
    console.log(user);
    if (user) {
      history.push('/');
    }
  });

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
