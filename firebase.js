import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyyWtFH_7TYoJdyw9QSdnB2rcJr8CZ0yw",
  authDomain: "phocusone-ef48c.firebaseapp.com",
  databaseURL: "https://phocusone-ef48c-default-rtdb.firebaseio.com",
  projectId: "phocusone-ef48c",
  storageBucket: "phocusone-ef48c.appspot.com",
  messagingSenderId: "829798237368",
  appId: "1:829798237368:web:7fec42fee39810667aa04d",
  measurementId: "G-0EYPCBYQRV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app)

export { auth };