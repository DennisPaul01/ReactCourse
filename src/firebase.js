// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRQNW8vaPCt__Hup0By51oYOWZMK44HSQ",
  authDomain: "logingoit.firebaseapp.com",
  projectId: "logingoit",
  storageBucket: "logingoit.appspot.com",
  messagingSenderId: "87207390095",
  appId: "1:87207390095:web:8c8ed640a2f7c0ee0339fa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
