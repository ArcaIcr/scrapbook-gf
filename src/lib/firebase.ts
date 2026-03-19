import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCy6SleUfvxj8JMT6JwJA3QHtAElyAwjUg",
  authDomain: "anniversary-site-c7f5b.firebaseapp.com",
  projectId: "anniversary-site-c7f5b",
  storageBucket: "anniversary-site-c7f5b.firebasestorage.app",
  messagingSenderId: "756019684286",
  appId: "1:756019684286:web:4b35279c5e7baa742c4fef"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
