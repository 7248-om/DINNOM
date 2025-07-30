// src/firebaseStorage.js
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// 🧳 Storage Project: noire-svnit
const storageConfig = {
  apiKey: "AIzaSyBFLDHfXq2wrYLM7SzZ0eu_RttgY6A3Ivs",
  authDomain: "noire-svnit.firebaseapp.com",
  projectId: "noire-svnit",
  storageBucket: "noire-svnit.appspot.com", // ✅ Correct format
  messagingSenderId: "131891085392",
  appId: "1:131891085392:web:7a74bbc37c4969e7045155",
  measurementId: "G-PNJQ0CLQJY"
};

// 🎒 Initialize Storage App
const storageApp = initializeApp(storageConfig, "storageApp");

const storage = getStorage(storageApp);
export { storage };
