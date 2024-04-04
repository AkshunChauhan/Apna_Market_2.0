// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "apna-market-798a5.firebaseapp.com",
  projectId: "apna-market-798a5",
  storageBucket: "apna-market-798a5.appspot.com",
  messagingSenderId: "618418142335",
  appId: "1:618418142335:web:d87625e2304b3a2985d34a",
  measurementId: "G-GWY42N50EF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);