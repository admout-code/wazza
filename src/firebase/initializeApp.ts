import firebase from "firebase/app"
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    authDomain: "chat-app-8b594.firebaseapp.com",
    databaseURL: "https://chat-app-8b594-default-rtdb.firebaseio.com",
    projectId: "chat-app-8b594",
    storageBucket: "chat-app-8b594.appspot.com",
    messagingSenderId: "70280767747",
    appId: "1:70280767747:web:a05d1022585b9450d86136",
    measurementId: "G-4Q6BLV5EWG"
};

firebase.initializeApp(firebaseConfig);