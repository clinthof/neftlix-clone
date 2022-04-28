import Firebase from 'firebase/compat/app';
import  'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyDL_x0m6Anqn8BcLbOn363cJQrLbdp7t1Y",
  authDomain: "netflix-clone-408fb.firebaseapp.com",
  projectId: "netflix-clone-408fb",
  storageBucket: "netflix-clone-408fb.appspot.com",
  messagingSenderId: "639968007287",
  appId: "1:639968007287:web:b12e6b196bb34c0ac76272"
};


const firebase = Firebase.initializeApp(config);

export { firebase };