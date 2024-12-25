// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8NkwIkLVFc6nFqASrc-mdXelRFeqT2ig",
  authDomain: "movie-house-efcc9.firebaseapp.com",
  projectId: "movie-house-efcc9",
  storageBucket: "movie-house-efcc9.firebasestorage.app",
  messagingSenderId: "1068955600242",
  appId: "1:1068955600242:web:6b840194eb3aa5831149eb",
  measurementId: "G-TF1RY0WLYP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();