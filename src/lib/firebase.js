import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_API_KEY,
//   authDomain: "reactchat-a1919.firebaseapp.com",
//   projectId: "reactchat-a1919",
//   storageBucket: "reactchat-a1919.appspot.com",
//   messagingSenderId: "995704277040",
//   appId: "1:995704277040:web:6da528ec10fa59086c05f5"
// };

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "react-chat-b3ac7.firebaseapp.com",
  projectId: "react-chat-b3ac7",
  storageBucket: "react-chat-b3ac7.appspot.com",
  messagingSenderId: "303150714260",
  appId: "1:303150714260:web:ca9995fe39a22b22149381"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()