// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiSXyUpACDflKoOIoUGSHFaR2DQl8MzyU",
  authDomain: "disscord-6c40c.firebaseapp.com",
  projectId: "disscord-6c40c",
  storageBucket: "disscord-6c40c.appspot.com",
  messagingSenderId: "845133662889",
  appId: "1:845133662889:web:b641ebc3a83b2668a777b8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
