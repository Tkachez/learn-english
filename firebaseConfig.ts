import { initializeApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAXxDEjg7cUhQoBRd4z-JJ-aNgkBTGq23I",
    authDomain: "learn-english-885ae.firebaseapp.com",
    projectId: "learn-english-885ae",
    storageBucket: "learn-english-885ae.appspot.com",
    messagingSenderId: "667468901058",
    appId: "1:667468901058:web:5bb823636dcda139e9695b",
    measurementId: "G-W141Q22806"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
// export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DATABASE = getFirestore(FIREBASE_APP);
