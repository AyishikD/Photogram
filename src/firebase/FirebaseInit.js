import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseConfig = {
  // Your Firebase configuration
  apiKey: "AIzaSyAFH8Rmv2Mo0zHsEe9YPkGu1xSoxlKnEYc",
  authDomain: "photogram-d19f9.firebaseapp.com",
  projectId: "photogram-d19f9",
  storageBucket: "photogram-d19f9.appspot.com",
  messagingSenderId: "511462971904",
  appId: "1:511462971904:web:4099f7512ea7e0a2f496e5",
  measurementId: "G-1Z85QDSCWK"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage, firebase };
