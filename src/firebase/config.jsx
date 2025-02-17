import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDXk9Z6RURYK6KAAUf_KQPgAdqzpGzcCWY",
  authDomain: "miniblog-79dd4.firebaseapp.com",
  projectId: "miniblog-79dd4",
  storageBucket: "miniblog-79dd4.firebasestorage.app",
  messagingSenderId: "841493184686",
  appId: "1:841493184686:web:019e265f942f7edc79ed3f",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
