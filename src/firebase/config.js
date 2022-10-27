import firebase from 'firebase/app';

import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

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

if (window.location.hostname === 'localhost') {
  auth.useEmulator('http://localhost:9099');
  db.useEmulator('localhost', '8080');
}

export default firebase;
