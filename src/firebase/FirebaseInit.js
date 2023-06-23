import fb from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

  const firebaseConfig = fb.initializeApp ({
    apiKey: "AIzaSyAFH8Rmv2Mo0zHsEe9YPkGu1xSoxlKnEYc",
    authDomain: "photogram-d19f9.firebaseapp.com",
    projectId: "photogram-d19f9",
    storageBucket: "photogram-d19f9.appspot.com",
    messagingSenderId: "511462971904",
    appId: "1:511462971904:web:4099f7512ea7e0a2f496e5",
    measurementId: "G-1Z85QDSCWK"
});

const db = firebaseConfig.firestore();
const auth = fb.auth();
const storage = fb.storage();

export { db, auth, storage, fb };
