import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBwhOdd8pPehfYipos-hHEU_t3z8BCDTe4",
  authDomain: "ao-db-a1255.firebaseapp.com",
  databaseURL: "https://ao-db-a1255.firebaseio.com",
  projectId: "ao-db-a1255",
  storageBucket: "ao-db-a1255.appspot.com",
  messagingSenderId: "508455962045",
  appId: "1:508455962045:web:567fcae140d6136126fed4",
  measurementId: "G-5P6QP5BLZR",
};

firebase.initializeApp(config);
