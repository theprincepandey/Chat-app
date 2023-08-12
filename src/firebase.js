import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyCt-8QwNYflTmOugdgN7S-kOwxbg4jus6A",
    authDomain: "chatapp-13e30.firebaseapp.com",
    projectId: "chatapp-13e30",
    storageBucket: "chatapp-13e30.appspot.com",
    messagingSenderId: "907540221856",
    appId: "1:907540221856:web:036d0fa8d7ec79ea9e9ec5"
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();