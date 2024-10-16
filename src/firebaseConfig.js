// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getFunctions } from 'firebase/functions';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgTYOETnN4XKjv-n85_gZaSARH8ZxLhqE",
  authDomain: "mobileedu-21317.firebaseapp.com",
  projectId: "mobileedu-21317",
  storageBucket: "mobileedu-21317.appspot.com",
  messagingSenderId: "833330260260",
  appId: "1:833330260260:web:89d9a919586a98f679abb1",
  measurementId: "G-6YZVFKK23V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const functions = getFunctions(app);