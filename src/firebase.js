// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// import firebase from './firebase';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";




const firebaseConfig = {
  apiKey: "AIzaSyDsouti0RtXye3UClBMe_RQBG-Y77ZDpB4",
  authDomain: "netflix-app-d18dd.firebaseapp.com",
  projectId: "netflix-app-d18dd",
  storageBucket: "netflix-app-d18dd.appspot.com",
  messagingSenderId: "894130199092",
  appId: "1:894130199092:web:a4b7e535d737f2cede0861",
  measurementId: "G-HJCFTM14YE"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp);

export {auth, firebaseApp}
export default db;

