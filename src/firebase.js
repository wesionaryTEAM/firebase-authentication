import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyDdxuvqKnEMBhAUeDWUTUw7QbJ-lib8DRw",
    authDomain: "authentication-demo-d2a24.firebaseapp.com",
    projectId: "authentication-demo-d2a24",
    storageBucket: "authentication-demo-d2a24.appspot.com",
    messagingSenderId: "879058297661",
    appId: "1:879058297661:web:a59a040adea57d6ae6db54"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth=firebase.auth();
  const firestore=firebase.firestore();
  export {auth,firestore};