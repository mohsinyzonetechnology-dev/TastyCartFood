import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = { 
  apiKey: "AIzaSyDFATaCm2sHZ43l5p248ruNqe9NpHMzcRw",
  authDomain: "authentication-app-832db.firebaseapp.com",
  databaseURL: "https://authentication-app-832db-default-rtdb.firebaseio.com",
  projectId: "authentication-app-832db",
  storageBucket: "authentication-app-832db.appspot.com",
  messagingSenderId: "1099249970529",
  appId: "1:1099249970529:web:971c227b957ad23fc22920"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const database = getDatabase(app);
