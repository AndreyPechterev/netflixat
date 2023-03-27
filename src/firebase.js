import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBtKO_p-mTkaF1Z4FEEhnm4NhCUliFaNjM",
    authDomain: "netflix-129f8.firebaseapp.com",
    projectId: "netflix-129f8",
    storageBucket: "netflix-129f8.appspot.com",
    messagingSenderId: "40982157966",
    appId: "1:40982157966:web:b0c412e10f9602fe1ec7df",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
