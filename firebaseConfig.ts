import { initializeApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

export const firebaseConfig = {
    apiKey: "AIzaSyAXxDEjg7cUhQoBRd4z-JJ-aNgkBTGq23I",
    authDomain: "learn-english-885ae.firebaseapp.com",
    databaseURL: "https://learn-english-885ae-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "learn-english-885ae",
    storageBucket: "learn-english-885ae.appspot.com",
    messagingSenderId: "667468901058",
    appId: "1:667468901058:web:5bb823636dcda139e9695b",
    measurementId: "G-W141Q22806"
};

const app = initializeApp(firebaseConfig);

export const FIREBASE_APP = initializeApp(firebaseConfig);
// export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const firestore = getFirestore(FIREBASE_APP);
