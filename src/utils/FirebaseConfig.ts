// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuSy93tp3SE9oGxfwdN8MApfgIY4lz-f0",
  authDomain: "pokedex-adam.firebaseapp.com",
  projectId: "pokedex-adam",
  storageBucket: "pokedex-adam.appspot.com",
  messagingSenderId: "630713759711",
  appId: "1:630713759711:web:d767ee030b394b1fe7b66a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const pokemonListRef = collection(firebaseDB, "pokemonList");
