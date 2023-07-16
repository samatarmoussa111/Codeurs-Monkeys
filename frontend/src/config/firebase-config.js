// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA09q_zN9rs2hJJ3DGY7_CTlgCzPuZSP_w",
  authDomain: "codeurs-monkeys.firebaseapp.com",
  projectId: "codeurs-monkeys",
  storageBucket: "codeurs-monkeys.appspot.com",
  messagingSenderId: "683633632666",
  appId: "1:683633632666:web:16962b6a7b9b58a2bc8623",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
