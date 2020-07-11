import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
var firebaseConfig = {
    apiKey: 'AIzaSyBtEV_i5CmeOeo6Oq4rjX6TZBIFPHh2cRc',                      // Auth / General Use
    applicationId: '1:246276867608:web:21e8a37cd38c84351be56d',      // General Use
    projectId: "blitz-ea224",               // General Use
    authDomain: "blitz-ea224.firebaseapp.com",         // Auth with popup/redirect
    databaseURL: "https://blitz-ea224.firebaseio.com", // Realtime Database
    storageBucket: "blitz-ea224.appspot.com",          // Storage
    messagingSenderId: "123456789"                  // Cloud Messaging
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const db = firebase.firestore();
