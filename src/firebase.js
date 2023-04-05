// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEgyGHO8f7zRgCB_i4n03jjmk4K6zg5vI",
  authDomain: "notesbook-f3020.firebaseapp.com",
  projectId: "notesbook-f3020",
  storageBucket: "notesbook-f3020.appspot.com",
  messagingSenderId: "916993622182",
  appId: "1:916993622182:web:680f7b8ac76a6b299a7467",
  measurementId: "G-EFLP9CSFQ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)

export const db = getFirestore(app)

const provider = new GoogleAuthProvider;

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
}