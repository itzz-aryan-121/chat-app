
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "react-chat-app-eaa98.firebaseapp.com",
  projectId: "react-chat-app-eaa98",
  storageBucket: "react-chat-app-eaa98.appspot.com",
  messagingSenderId: "630210285059",
  appId: "1:630210285059:web:8d42c76b1d0fe292880836"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();