import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCu_jpIvh6Diqt-I27P7mt9C2QBlGxNcDY",
  authDomain: "vit-convocation.firebaseapp.com",
  projectId: "vit-convocation",
  storageBucket: "vit-convocation.appspot.com",
  messagingSenderId: "344486136679",
  appId: "1:344486136679:web:f44c161696ec0924a27dc2",
  measurementId: "G-EKHHK23RNH"
};

// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const db = app.firestore();
export const logout1 = () => {
  auth.signOut();
};