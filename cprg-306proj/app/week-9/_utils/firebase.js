// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4ItRkriNaLxlwCymAFkmYnhXCZOW5kHY",
  authDomain: "cprg306-assignments-d6396.firebaseapp.com",
  projectId: "cprg306-assignments-d6396",
  storageBucket: "cprg306-assignments-d6396.firebasestorage.app",
  messagingSenderId: "578907303577",
  appId: "1:578907303577:web:f618c29f3307498e80d208"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);