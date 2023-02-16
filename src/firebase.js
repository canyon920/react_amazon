// Import the functions you need from the SDKs you need
import { getAuth } from 'firebase/auth';
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore' 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBx0mAO16nygxISW6vZpuT4r3S8ajyiYOM",
  authDomain: "fir-c1c4e.firebaseapp.com",
  projectId: "fir-c1c4e",
  storageBucket: "fir-c1c4e.appspot.com",
  messagingSenderId: "98355620264",
  appId: "1:98355620264:web:dbbdca41af305953e2d59d",
  measurementId: "G-HH72K5P14M"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = getAuth(firebaseApp);
export {db, auth};