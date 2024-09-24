// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD51Vgz2ZgqvFrqrMl6m8hPWHpnq9dvsC8",
  authDomain: "personal-tracker-a7a64.firebaseapp.com",
  databaseURL:
    "https://personal-tracker-a7a64-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "personal-tracker-a7a64",
  storageBucket: "personal-tracker-a7a64.appspot.com",
  messagingSenderId: "1029251481880",
  appId: "1:1029251481880:web:e2cfa13f2d94863649de6d",
};

// Initialize Firebase
const db = initializeApp(firebaseConfig);

export default db;
