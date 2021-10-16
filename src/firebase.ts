import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const config = {
  apiKey: "AIzaSyA5KDlT6gWxOJg60TGYyk-U3p-JyaY9Nv8",
  authDomain: "foodies-app-c4722.firebaseapp.com",
  projectId: "foodies-app-c4722",
  storageBucket: "foodies-app-c4722.appspot.com",
  messagingSenderId: "944468645100",
  appId: "1:944468645100:web:faa1dfcffcfd74d53cc1c9",
};

export const app = initializeApp(config);

export const auth = getAuth(app);
export const db = getFirestore(app);
