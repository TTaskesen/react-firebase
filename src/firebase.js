

  // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCTJAsPgn7oSalVR_FwqLT-2FcGQXl8T4",
  authDomain: "posta-app-79cfa.firebaseapp.com",
  projectId: "posta-app-79cfa",
  storageBucket: "posta-app-79cfa.appspot.com",
  messagingSenderId: "892159603911",
  appId: "1:892159603911:web:8bd4e4998181f0e433bae2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app)
export const db = getFirestore(app)