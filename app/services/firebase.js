// Functions from the SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjeeLdAC6-60KoHyFLEfEjjnKUICPXxF8",
  authDomain: "book-app-885f1.firebaseapp.com",
  projectId: "book-app-885f1",
  storageBucket: "book-app-885f1.firebasestorage.app",
  messagingSenderId: "820413242481",
  appId: "1:820413242481:web:d12f04a2b10b13712d8fd0",
  measurementId: "G-606HBBT3D5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db= getFirestore(app);