import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCwIL121GnOJgvb1vIfWQEvS5Q0RYh-LiQ",
    authDomain: "captureit1-331dc.firebaseapp.com",
    projectId: "captureit1-331dc",
    storageBucket: "captureit1-331dc.appspot.com",
    messagingSenderId: "265825297728",
    appId: "1:265825297728:web:903a861475ad99645806a5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const filesStorage = firebase.storage();
const fileFireStore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export {
    fileFireStore,
    filesStorage,
    timestamp
};