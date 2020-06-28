
import firebase from 'firebase/app';

require("firebase/firestore");
require("firebase/auth");

// initialize firebase-stuff
export const db = firebase.firestore();

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();