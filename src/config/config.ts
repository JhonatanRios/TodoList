import * as firebase from 'firebase';

// Required for side-effects
require("firebase/firestore");

const config = {
    apiKey: "AIzaSyAJr59cNlWD_F96jj2hRFDZeseYbXhNGFc",
    authDomain: "todolist-61351.firebaseapp.com",
    databaseURL: "https://todolist-61351.firebaseio.com",
    projectId: "todolist-61351",
    storageBucket: "todolist-61351.appspot.com",
    messagingSenderId: "679851935963"
  }

  firebase.initializeApp(config);
  
  // Initialize Cloud Firestore through Firebase
  export const db = firebase.firestore();