// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/auth';
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAH2A-IEgucuhvOkQJFYnnP79QSnK4l2bc",
  authDomain: "ai-art1-45b6e.firebaseapp.com",
  projectId: "ai-art1-45b6e",
  storageBucket: "ai-art1-45b6e.appspot.com",
  messagingSenderId: "772360120813",
  appId: "1:772360120813:web:d670cb534e60be54ed5fe4",
  measurementId: "G-PZDZKZZH8D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);