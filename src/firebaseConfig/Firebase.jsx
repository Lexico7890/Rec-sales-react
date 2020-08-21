import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyAv2hve5_ezFtZCsgNCD5lC27Bfs5O0k18",
    authDomain: "rec-sales-react.firebaseapp.com",
    databaseURL: "https://rec-sales-react.firebaseio.com",
    projectId: "rec-sales-react",
    storageBucket: "rec-sales-react.appspot.com",
    messagingSenderId: "970330271224",
    appId: "1:970330271224:web:e282a434925a618c293a0d",
    measurementId: "G-DQBL0QYMRN"
};
  // Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();
//firebase.analytics();


