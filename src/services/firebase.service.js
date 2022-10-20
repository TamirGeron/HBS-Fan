import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBekznfACZnw-4lq433AdeRHQluc7_t1bw",
  authDomain: "hbs-fan.firebaseapp.com",
  projectId: "hbs-fan",
  storageBucket: "hbs-fan.appspot.com",
  messagingSenderId: "119360103171",
  appId: "1:119360103171:web:757aa89ca3159e4d4d7f36",
  measurementId: "G-73WT6SWFBN",
};
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
