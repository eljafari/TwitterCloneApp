import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAPRipyrOsdGZ1WiGcoyWNKkNNsSRd0QOk",
  authDomain: "twitter-clone-ff5d9.firebaseapp.com",
  projectId: "twitter-clone-ff5d9",
  storageBucket: "twitter-clone-ff5d9.appspot.com",
  messagingSenderId: "1098468283358",
  appId: "1:1098468283358:web:49d718cb68039f730c834f"
};
const firebaseApp=firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;


