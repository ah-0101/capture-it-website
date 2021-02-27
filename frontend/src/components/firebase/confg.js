import * as firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBRWwldEdnrDxHd1LDimKwJc4nESMF9zBE",
    authDomain: "captureit-f0e37.firebaseapp.com",
    projectId: "captureit-f0e37",
    storageBucket: "captureit-f0e37.appspot.com",
    messagingSenderId: "939100866278",
    appId: "1:939100866278:web:d86d638908923ccf2e1d27"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const filesStorage = firebase.storage();
const fileFireStore = firebase.firestore();

export {
    fileFireStore,
    filesStorage
};