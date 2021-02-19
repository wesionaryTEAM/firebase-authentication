import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyDIxj8f8YwRVyTgdQHXyMujjybqeW-u_oY",
  authDomain: "fir-authentication-e633d.firebaseapp.com",
  projectId: "fir-authentication-e633d",
  storageBucket: "fir-authentication-e633d.appspot.com",
  messagingSenderId: "89397786367",
  appId: "1:89397786367:web:3acab50b6236dcb608beca"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  const auth=firebase.auth();
  const firestore=firebase.firestore();
  const provider =new firebase.auth.GoogleAuthProvider();
  export {auth,firestore,provider};