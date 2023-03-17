import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCD7vzV7S-2n04yg3ZDy9VwHs7eNq5Mni8",
  authDomain: "e-commercerossetti.firebaseapp.com",
  projectId: "e-commercerossetti",
  storageBucket: "e-commercerossetti.appspot.com",
  messagingSenderId: "76826634023",
  appId: "1:76826634023:web:4be858c03b2a007dffab02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));




root.render(
 //<React.StrictMode>
    <App />
 //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
