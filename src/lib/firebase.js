import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "aftab-sreactchatapp.firebaseapp.com",
  projectId: "aftab-sreactchatapp",
  storageBucket: "aftab-sreactchatapp.appspot.com",
  messagingSenderId: "224013830561",
  appId: "1:224013830561:web:20bb4d3b613a997a2da3e0",
  measurementId: "G-7DPP1R5SDJ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
