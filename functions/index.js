const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.userCreate = functions.auth.user().onCreate((user) => {   
    return admin.firestore().collection('users').doc(user.uid).set({
        email: user.email,
        displayName: user.displayName
    });
});
