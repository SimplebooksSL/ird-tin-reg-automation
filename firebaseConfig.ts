import { initializeApp, getApps, getApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDKhrDeM6wT6pWXFcyp6cIONUd0xEg6lZU",
  authDomain: "simple-books-production.firebaseapp.com",
  projectId: "simple-books-production",
  storageBucket: "simple-books-production.appspot.com",
  messagingSenderId: "754986890869",
  appId: "1:754986890869:web:4112b4eb56562a13cbea3c",
};

// Initialize Firebase if not already initialized
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const storage = getStorage(app);

export default storage;
