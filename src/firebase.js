import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCnvLyOmKsMUQaT7Ho9zk75VHtYctP3w4c",
    authDomain: "facebook-messenger-565a7.firebaseapp.com",
    projectId: "facebook-messenger-565a7",
    storageBucket: "facebook-messenger-565a7.appspot.com",
    messagingSenderId: "712817552242",
    appId: "1:712817552242:web:f9bb71ba8d8a3381d8cbeb",
    measurementId: "G-YDSRZX85EP"
  });
 
const db = firebaseApp.firestore();

export default db;