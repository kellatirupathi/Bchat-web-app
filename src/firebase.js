import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDwS4qx-R785En9MdVMC6j8wkX_U7xUYu0",
    authDomain: "project2-bed6c.firebaseapp.com",
    projectId: "project2-bed6c",
    storageBucket: "project2-bed6c.appspot.com",
    messagingSenderId: "899934905915",
    appId: "1:899934905915:web:189ba2b59e5b0b5e241e1e",
    measurementId: "G-D16G9NRKGW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
