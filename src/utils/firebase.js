// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4scdu1Um7Qry4G_xUFseW3iD1lCZ9i6w",
  authDomain: "netflixgpt-94973.firebaseapp.com",
  projectId: "netflixgpt-94973",
  storageBucket: "netflixgpt-94973.appspot.com",
  messagingSenderId: "638312981459",
  appId: "1:638312981459:web:7c543e041824245922c526",
  measurementId: "G-DSVM8E7ZZS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();