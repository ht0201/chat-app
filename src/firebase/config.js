import firebase from 'firebase/compat/app';

import 'firebase/compat/analytics';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCYrc-KSGwK_XupexpYEZxm5HZib_sDs5Y',
  authDomain: 'chat-app-fcec2.firebaseapp.com',
  projectId: 'chat-app-fcec2',
  storageBucket: 'chat-app-fcec2.appspot.com',
  messagingSenderId: '1091699143972',
  appId: '1:1091699143972:web:2f1f11eb6596b701a9afb1',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const auth = firebase.auth();
export const db = firebase.firestore();

export default firebase;
