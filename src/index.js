import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyBStyT6tCQ_PXb9Rvl7RPuiwOR7zCJUF68",
  authDomain: "evernote-clone-28fef.firebaseapp.com",
  projectId: "evernote-clone-28fef",
  storageBucket: "evernote-clone-28fef.appspot.com",
  messagingSenderId: "1096022932178",
  appId: "1:1096022932178:web:2a10e15236dce46b880b0b",
  measurementId: "G-325ZPTJ5YW"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
