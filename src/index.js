import React from "react";
import ReactDOM from "react-dom/client";
import { initializeApp } from "firebase/app";
import App from "./App";
import "./styles.css";

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCT3Y_Iajiwr-OyORkTWDnPs4ghJkW3Wik",
  authDomain: "top-where-is-waldo.firebaseapp.com",
  projectId: "top-where-is-waldo",
  storageBucket: "top-where-is-waldo.appspot.com",
  messagingSenderId: "911739043380",
  appId: "1:911739043380:web:694e3bc92cf298a5b65461",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
