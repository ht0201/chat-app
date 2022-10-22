import { Spin } from 'antd';
import React, { createContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../firebase/config';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const history = useHistory();
  const [user, setUser] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubcribed = auth.onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        const { displayName, email, uid, photoURL } = user;
        setUser({
          displayName,
          email,
          uid,
          photoURL,
        });
        setIsLoading(false);

        history.push('/');
        return;
      }

      setIsLoading(false);
      history.push('/login');
    });

    return () => {
      unsubcribed();
    };
  }, [history]);

  return (
    <AuthContext.Provider value={{ user }}>
      {isLoading ? <Spin /> : children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
